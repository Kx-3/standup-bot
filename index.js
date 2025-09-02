require("dotenv").config();
const { App } = require("@slack/bolt");
const { PrismaClient } = require("./generated/prisma");
const express = require("express");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);
const cron = require("node-cron");
const { timeAt } = require("tz-offset");
const prisma = new PrismaClient();

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

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
  const yDateUTC = yDateLocal.utc();
  const yEntry = await prisma.standupEntry.findFirst({
    where: {
      userId: slackUserId,
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
        const existing = prisma.standupEntry.findFirst({
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
    if (
      last &&
      dayjs(last).add(1, "day").startOf("day").isSame(dateStartUTC, "day")
    )
      newStreak += 1;
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

cron.schedule("0 9 * * *", async () => {
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
});

cron.schedule("0 17 * * *", async () => {
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
});

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
    const rate = ((subs / days) * 100).toFixed(1);
    report += `<@${u.slackUserId}>: ${subs} submissions (${rate}%)\n`;
  }
  await client.chat.postMessage({
    channel: body.channel_id,
    text: report,
  });
});

const web = express();
web.get("/health", (req, res) => res.send("OK"));
web.get("/analytics/participation.csv", async (req, res) => {
  const teamId = req.query.teamId;
  const users = await prisma.user.findMany({
    where: { teamId },
  });
  const end = dayjs().utc().startOf("day");
  const start = end.subtract(30, "day");

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
    const rate = ((subs / 30) * 100).toFixed(1);
    rows.push(`${u.slackUserId}, ${subs}, ${rate}%`);
  }
  res.set("Content-Type", "text/csv");
  res.send(rows.join("\n"));
});

(async () => {
  await app.start(process.env.PORT || 3000);
  web.listen((process.env.PORT || 3000) + 1, () => {});
  console.log("⚡️ Slack Bolt app is running!");
})();
