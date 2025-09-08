require("dotenv").config();
const { App, ExpressReceiver } = require("@slack/bolt");
const { PrismaClient } = require("./generated/prisma");
const express = require("express");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
dayjs.extend(timezone);
dayjs.extend(utc);
const cron = require("node-cron");
const { timeAt } = require("tz-offset");
const prisma = new PrismaClient();

const receiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const app = new App({
  receiver,
  token: process.env.SLACK_BOT_TOKEN,
});

function countWeekdays(start, end) {
  let count = 0;
  let d = start.clone()
  while (d.isBefore(end, "day")) {
    if (d.day() !== 0 && d.day() !== 6) count++;
    d = d.add(1, "day");
  }
  return count;
}

receiver.app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

receiver.app.get("/analytics/participation.csv", async (req, res) => {
  const teamId = req.query.teamId;
  const users = await prisma.user.findMany({
    where: { teamId },
  });
  const end = dayjs().utc().startOf("day");
  const start = end.subtract(30, "day");

  const weekdays = countWeekdays(start, end);

  const entries = await prisma.standupEntry.findMany({
    where: {
      teamId,
      date: {
        gte: start.toDate(),
        lt: end.toDate(),
      },
    },
  });
  const byUser = new Map(users.map((u) => [u.id, 0]));
  for (const e of entries) {
    byUser.set(e.userId, (byUser.get(e.userId) || 0) + 1);
  }

  const rows = ["user, submissions_30d, participation_rate_30d"];
  for (const u of users) {
    const subs = byUser.get(u.id) || 0;
    const rate = weekdays > 0 ? ((subs / weekdays) * 100).toFixed(1) : 0;
    rows.push(`${u.realName || u.slackUserId}, ${subs}, ${rate}%`);
  }
  res.set("Content-Type", "text/csv");
  res.send(rows.join("\n"));
});

function isNextWeekday(last, current) {
  let d = dayjs(last).add(1, "day").startOf("day");
  while (d.day() === 0 || d.day() === 6) {
    //skip Saturday(6) and Sunday(0)
    d = d.add(1, "day");
  }
  return d.isSame(current, "day");
}

async function openStandupModal(client, trigger_id, slackTeamId, slackUserId) {
  let team = await prisma.team.upsert({
    where: { slackTeamId },
    update: {},
    create: {
      slackTeamId,
      name: slackTeamId,
      timezone: process.env.DEFAULT_TEAM_TZ,
    },
  });
  let user = await prisma.user.upsert({
    where: { slackUserId },
    update: {},
    create: { slackUserId, teamId: team.id },
  });
  const tz = team.timezone || process.env.DEFAULT_TEAM_TZ;
  const todayTz = dayjs().tz?.(tz) ?? dayjs(); // if no tz plugin, assume server tz
  const yDateLocal = todayTz.subtract(1, "day").startOf("day");
  while (yDateLocal.day() === 0 || yDateLocal.day() === 6) {
    //skip Saturday(6) and Sunday(0)
    yDateLocal = yDateLocal.subtract(1, "day");
  }
  const yDateUTC = yDateLocal.utc();
  const yEntry = await prisma.standupEntry.findFirst({
    where: {
      userId: user.id,
      date: { gte: yDateUTC.toDate(), lt: yDateUTC.add(1, "day").toDate() },
    },
    orderBy: { createdAt: "desc" },
  });
  const yesterdayPrefill = yEntry?.today || "";
  await client.views.open({
    trigger_id,
    view: {
      type: "modal",
      callback_id: "submit_standup",
      title: { type: "plain_text", text: "Daily Stand-up" },
      submit: { type: "plain_text", text: "Submit" },
      blocks: [
        {
          type: "input",
          block_id: "y",
          label: { type: "plain_text", text: "Yesterday" },
          element: {
            type: "plain_text_input",
            action_id: "y_i",
            multiline: true,
            placeholder: {
              type: "plain_text",
              text: "What did you do yesterday?",
            },
            initial_value: yesterdayPrefill,
          },
        },
        {
          type: "input",
          block_id: "t",
          label: { type: "plain_text", text: "Today" },
          element: {
            type: "plain_text_input",
            action_id: "t_i",
            multiline: true,
            placeholder: {
              type: "plain_text",
              text: "What will you do today?",
            },
          },
        },
        {
          type: "input",
          block_id: "b",
          optional: true,
          element: {
            type: "plain_text_input",
            action_id: "b_i",
            multiline: true,
            placeholder: {
              type: "plain_text",
              text: "Any blockers?",
            },
          },
          label: { type: "plain_text", text: "Blockers" },
        },
      ],
    },
  });
}

app.command("/standup", async ({ body, ack, client }) => {
  await ack();
  openStandupModal(client, body.trigger_id, body.team_id, body.user_id);
});

app.view("submit_standup", async ({ ack, body, view, client }) => {
  await ack();
  const slackTeamId = body.team.id;
  const slackUserId = body.user.id;

  const team = await prisma.team.findUnique({
    where: { slackTeamId },
  });
  const user = await prisma.user.upsert({
    where: { slackUserId },
    update: {},
    create: { slackUserId, teamId: team.id },
  });

  const tz = team.timezone || process.env.DEFAULT_TEAM_TZ;
  const dateLocal = dayjs().tz?.(tz) ?? dayjs(); // if no tz plugin, assume server tz
  const dateStartUTC = dateLocal.startOf("day").utc().toDate();

  const y = view.state.values["y"]["y_i"].value.trim();
  const t = view.state.values["t"]["t_i"].value.trim();
  const b = view.state.values["b"]?.["b_i"]?.value.trim() || "";

  await prisma.standupEntry.upsert({
    where: {
      id: await (async () => {
        const existing = await prisma.standupEntry.findFirst({
          where: {
            userId: user.id,
            date: {
              gte: dateStartUTC,
              lt: dayjs(dateStartUTC).add(1, "day").toDate(),
            },
          },
        });
        return existing?.id || "new";
      })(),
    },
    update: { today: t, yesterday: y, blockers: b },
    create: {
      userId: user.id,
      teamId: team.id,
      date: dateStartUTC,
      today: t,
      yesterday: y,
      blockers: b,
    },
  });

  const last = user.lastSubmit ? dayjs(user.lastSubmit) : null;
  const isNew = !last || !dayjs(last).isSame(dateStartUTC, "day");
  let newStreak = user.streak;
  if (isNew) {
    if (last && isNextWeekday(last, dateStartUTC)) newStreak += 1;
    else newStreak = 1;
  }
  await prisma.user.update({
    where: { id: user.id },
    data: { lastSubmit: dateStartUTC, streak: newStreak },
  });

  await client.chat.postMessage({
    channel: slackUserId,
    text: `Stand-up submitted ✅`,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Stand-up submitted* ✅\n*Yesterday:* ${y || "-"}\n*Today:* ${
            t || "-"
          }\n*Blockers:* ${b || "-"}`,
        },
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: `Streak: *${newStreak}*` }],
      },
    ],
  });
});

cron.schedule(
  "0 9 * * 1-5",
  async () => {
    console.log("⏰ Sending daily stand-up reminders...");
    const teams = await prisma.team.findMany();
    for (const team of teams) {
      const users = await prisma.user.findMany({ where: { teamId: team.id } });

      for (const user of users) {
        try {
          await app.client.chat.postMessage({
            token: process.env.SLACK_BOT_TOKEN,
            channel: user.slackUserId,
            text: "👋 Good morning! Time for your daily stand-up. Use `/standup` to fill it in or click below:",
            blocks: [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: "👋 Good morning! Time for your daily stand-up. ",
                },
              },
              {
                type: "actions",
                elements: [
                  {
                    type: "button",
                    text: {
                      type: "plain_text",
                      text: "Start Stand-up",
                    },
                    action_id: "open_standup",
                    value: "start",
                  },
                ],
              },
            ],
          });
        } catch (error) {
          console.error(
            `Failed to send reminder to user ${user.slackUserId}:`,
            error
          );
        }
      }
    }
  },
  {
    timezone: "Africa/Nairobi",
  }
);

cron.schedule(
  "0 17 * * 1-5",
  async () => {
    console.log("⏰ Running daily stand-up summary...");

    const todayUTC = dayjs().utc().startOf("day");
    const tomorrowUTC = todayUTC.add(1, "day");

    const entries = await prisma.standupEntry.findMany({
      where: {
        date: {
          gte: todayUTC.toDate(),
          lt: tomorrowUTC.toDate(),
        },
      },
      include: { user: true },
    });
    if (entries.length === 0) {
      await app.client.chat.postMessage({
        channel: process.env.DEFAULT_DIGEST_CHANNEL_ID,
        text: "No stand-up entries were submitted today.",
      });
      return;
    }

    const summaryBlocks = [];
    for (const entry of entries) {
      summaryBlocks.push(
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*<@${entry.user.slackUserId}>*`,
          },
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: `Streak: *${entry.user.streak || 0}*`,
            },
          ],
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Yesterday:*\n${entry.yesterday || "-"}`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Today:*\n${entry.today || "-"}`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Blockers:*\n${entry.blockers || "-"}`,
          },
        },
        { type: "divider" }
      );
    }

    await app.client.chat.postMessage({
      channel: process.env.DEFAULT_DIGEST_CHANNEL_ID,
      text: "📊 Daily Stand-up Summary",
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "📊 Daily Stand-up Summary",
            emoji: true,
          },
        },
        ...summaryBlocks,
      ],
    });
  },
  {
    timezone: "Africa/Nairobi",
  }
);

cron.schedule(
  "0 9 * * 1",
  async () => {
    const teams = await prisma.team.findMany();
    for (const team of teams) {
      const end = dayjs().utc().startOf("day");
      const start = end.subtract(7, "day");
      const entries = await prisma.standupEntry.findMany({
        where: {
          teamId: team.id,
          date: {
            gte: start.toDate(),
            lt: end.toDate(),
          },
        },
        include: { user: true },
      });
      const users = await prisma.user.findMany({ where: { teamId: team.id } });
      const byUser = new Map();
      for (const u of users) {
        byUser.set(u.id, []);
      }
      for (const e of entries) byUser.get(e.userId)?.push(e);

      const lines = [];
      for (const u of users) {
        const subs = byUser.get(u.id)?.length || 0;
        const rate = ((subs / 5) * 100).toFixed(1);
        lines.push(`<@${u.slackUserId}>: ${subs} submissions (${rate}%)`);
      }
      const blockers = entries
        .map((e) => e.blockers?.toLowerCase() || "")
        .filter(Boolean)
        .join(" ")
        .split(/\W+/)
        .filter((s) => s.length > 4);
      const topTerms =
        Object.entries(
          blockers.reduce((acc, term) => {
            acc[term] = (acc[term] || 0) + 1;
            return acc;
          }, {})
        )
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([term, count]) => `${term} (${count})`)
          .join(", ") || "None";
      const channel = process.env.DEFAULT_DIGEST_CHANNEL_ID;
      if (!channel) continue;

      await app.client.chat.postMessage({
        token: process.env.SLACK_BOT_TOKEN,
        channel,
        text: `*Weekly Standup Report*`,
        blocks: [
          {
            type: "header",
            text: {
              type: "plain_text",
              text: "Weekly Stand-up Digest",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*Stand-up Participation (Last 5 weekdays):*\n${
                lines.join("\n") || "No data"
              }`,
            },
          },
          {
            type: "section",
            elements: [
              {
                type: "mrkdwn",
                text: `*Top blocker (keywords):* ${topTerms}`,
              },
            ],
          },
        ],
      });
    }
  },
  {
    timezone: "Africa/Nairobi",
  }
);

app.action("open_standup", async ({ body, ack, client }) => {
  await ack();
  openStandupModal(client, body.trigger_id, body.team.id, body.user.id);
});

app.command("/participation", async ({ body, ack, client }) => {
  await ack();
  const slackTeamId = body.team_id;
  const days = parseInt(body.text) || 30;
  const team = await prisma.team.findUnique({
    where: { slackTeamId },
  });
  if (!team) {
    await client.chat.postEphemeral({
      channel: body.channel_id,
      user: body.user_id,
      text: "Team not found in the database.",
    });
    return;
  }

  const users = await prisma.user.findMany({
    where: { teamId: team.id },
  });
  const end = dayjs().utc().startOf("day");
  const start = end.subtract(days, "day");

  const weekdays = countWeekdays(start, end);

  const entries = await prisma.standupEntry.findMany({
    where: {
      teamId: team.id,
      date: {
        gte: start.toDate(),
        lt: end.toDate(),
      },
    },
  });
  const byUser = new Map(users.map((u) => [u.id, 0]));
  for (const e of entries) {
    byUser.set(e.userId, (byUser.get(e.userId) || 0) + 1);
  }
  let report = `*Stand-up Participation Report (Last ${days} days)*\n`;
  for (const u of users) {
    const subs = byUser.get(u.id) || 0;
    const rate = weekdays > 0 ? ((subs / weekdays) * 100).toFixed(1) : 0;
    report += `<@${u.slackUserId}>: ${subs} submissions (${rate}%)\n`;
  }
  await client.chat.postMessage({
    channel: body.channel_id,
    text: report,
  });
});

async function ensureTeam(prisma, app) {
  const { team, team_id } = await app.client.auth.test();
  return await prisma.team.upsert({
    where: { slackTeamId: team_id },
    update: { name: team },
    create: {
      slackTeamId: team_id,
      name: team,
      timezone: process.env.DEFAULT_TEAM_TZ,
    },
  });
}

async function syncChannelUsers(prisma, app) {
  const standupChannel = process.env.DEFAULT_DIGEST_CHANNEL_ID;
  const team = await ensureTeam(prisma, app);
  let cursor;
  let total = 0;
  do {
    const res = await app.client.conversations.members({
      channel: standupChannel,
      cursor,
      limit: 200,
    });
    for (const userId of res.members) {
      if (userId.startsWith("B") || userId === "USLACKBOT") continue; // skip bots
      const slackUser = await app.client.users.info({ user: userId });
      if (slackUser.user?.is_bot || slackUser.user?.deleted) continue;
      const realName = slackUser.user.profile.real_name || slackUser.user.name;
      await prisma.user.upsert({
        where: { slackUserId: userId },
        update: { teamId: team.id, realName },
        create: { slackUserId: userId, teamId: team.id, realName },
      });
      total++;
    }
    cursor = res.response_metadata?.next_cursor || undefined;
  } while (cursor);
  console.log(`✅ Synced ${total} users to database.`);
}
syncChannelUsers(prisma, app).catch(console.error);
cron.schedule("0 3 * * *", () => {
  syncChannelUsers(prisma, app).catch(console.error);
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Slack Bolt app is running!");
})();
