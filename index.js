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
  authorize: async ({ teamId }) => {
    const workspace = await prisma.workspace.findUnique({
      where: { slackTeamId: teamId },
    });
    if (!workspace || !workspace.botToken) {
      throw new Error("Workspace not found or bot token missing");
    }
    return {
      botToken: workspace.botToken,
    };
  },
});

function countWeekdays(start, end) {
  let count = 0;
  let d = start.clone();
  while (d.isBefore(end, "day")) {
    if (d.day() !== 0 && d.day() !== 6) count++;
    d = d.add(1, "day");
  }
  return count;
}

receiver.app.get("/slack/oauth_redirect", async (req, res) => {
  const { code } = req.query;
  if (!code) return res.status(400).send("No code provided");
  try {
    const response = await fetch("https://slack.com/api/oauth.v2.access", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: process.env.SLACK_CLIENT_ID,
        client_secret: process.env.SLACK_CLIENT_SECRET,
        redirect_uri: process.env.SLACK_REDIRECT_URI,
      }),
    });
    const data = await response.json();
    if (!data.ok) {
      console.error("OAuth failed:", data);
      return res.status(400).send("OAuth failed: " + data.error);
    }
    await prisma.workspace.upsert({
      where: { slackTeamId: data.team.id },
      update: { name: data.team.name, botToken: data.access_token },
      create: {
        slackTeamId: data.team.id,
        name: data.team.name,
        timezone: process.env.DEFAULT_TEAM_TZ,
        botToken: data.access_token,
      },
    });
    await app.client.chat.postMessage({
      token: data.access_token, // bot token for this workspace
      channel: data.authed_user.id, // send directly to installer
      text: "🎉 Thanks for installing the Standup Bot!",
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Welcome! Let's finish setting up your standup bot.",
          },
        },
        {
          type: "actions",
          elements: [
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Open Setup",
              },
              action_id: "open_setup",
            },
          ],
        },
      ],
    });
    res.send("App installed successfully to: " + data.team.name);
  } catch (error) {
    console.error("OAuth error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.action("open_setup", async ({ body, ack, client }) => {
  await ack();

  await client.views.open({
    trigger_id: body.trigger_id,
    view: {
      type: "modal",
      callback_id: "setup_modal",
      title: { type: "plain_text", text: "Standup Setup" },
      submit: { type: "plain_text", text: "Save" },
      blocks: [
        {
          type: "input",
          block_id: "channel_block",
          label: { type: "plain_text", text: "Choose Standup Channel" },
          element: {
            type: "conversations_select",
            action_id: "channel_select",
            default_to_current_conversation: true,
          },
        },
      ],
    },
  });
});

app.view("setup_modal", async ({ ack, body, view, client }) => {
  await ack();

  const channelId =
    view.state.values.channel_block.channel_select.selected_conversation;

  const installerId = body.user.id;
  const workspaceId = body.team.id;

  // Save this in your DB
  await prisma.workspace.findUnique({
    where: { slackTeamId: workspaceId }
  });

  await client.chat.postMessage({
    channel: installerId,
    text: `✅ Setup complete! Standups will be posted in <#${channelId}>.`,
  });
});

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
  let workspace = await prisma.workspace.findUnique({
    where: { slackTeamId }
  });
  let user = await prisma.user.upsert({
    where: { slackUserId },
    update: {},
    create: { slackUserId, workspaceId: workspace.id },
  });
  const tz = workspace.timezone || process.env.DEFAULT_TEAM_TZ;
  const todayTz = dayjs().tz?.(tz) ?? dayjs(); // if no tz plugin, assume server tz
  let yDateLocal = todayTz.subtract(1, "day").startOf("day");
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

  const slackUserId = body.user_id;
  let user = await prisma.user.findUnique({
    where: { slackUserId },
  });
  if (!user || !user.teamId) {
    await client.views.open({
      trigger_id: body.trigger_id,
      view: {
        type: "modal",
        callback_id: "team_selection_modal",
        title: { type: "plain_text", text: "Select Your Team" },
        submit: { type: "plain_text", text: "Submit" },
        blocks: [
          {
            type: "input",
            block_id: "team_block",
            label: { type: "plain_text", text: "Choose Your Team" },
            element: {
              type: "static_select",
              action_id: "team_select",
              placeholder: { type: "plain_text", text: "Select a team" },
              options: [
                {
                  text: { type: "plain_text", text: "Software" },
                  value: "software",
                },
                {
                  text: { type: "plain_text", text: "Data" },
                  value: "data",
                },
                {
                  text: { type: "plain_text", text: "Tech Ops" },
                  value: "techops",
                },
                {
                  text: { type: "plain_text", text: "Growth" },
                  value: "growth",
                },
                {
                  text: { type: "plain_text", text: "Student Ops" },
                  value: "studentops",
                },
              ],
            },
          },
        ],
      },
    });
  } else {
    openStandupModal(client, body.trigger_id, body.team_id, body.user_id);
  }
});

app.view("team_selection_modal", async ({ ack, body, view, client }) => {
  await ack();
  const slackUserId = body.user.id;
  const slackTeamId = body.team.id;
  const selectedTeam =
    view.state.values.team_block.team_select.selected_option.value;

  const workspace = await prisma.workspace.findUnique({
    where: { slackTeamId }
  });

  let team = await prisma.team.findFirst({
    where: { name: selectedTeam },
  });
  if (!team) {
    team = await prisma.team.create({
      data: {
        name: selectedTeam,
        workspaceId: workspace.id,
      },
    });
  }

  await prisma.user.upsert({
    where: { slackUserId },
    update: { teamId: team.id },
    create: {
      slackUserId,
      teamId: team.id,
      realName: body.user.name,
      workspaceId: workspace.id,
    },
  });

  await openStandupModal(client, body.trigger_id, slackTeamId, slackUserId);
});

app.view("submit_standup", async ({ ack, body, view, client }) => {
  await ack();
  const slackTeamId = body.team.id;
  const slackUserId = body.user.id;

  const workspace = await prisma.workspace.findUnique({
    where: { slackTeamId },
  });
  const user = await prisma.user.upsert({
    where: { slackUserId },
    update: {},
    create: { slackUserId, workspaceId: workspace.id },
    include: { team: true },
  });

  const tz = workspace.timezone || process.env.DEFAULT_TEAM_TZ;
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
      teamId: user.teamId,
      workspaceId: workspace.id,
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

app.event("app_uninstalled", async ({ context }) => {
  // context.teamId is the workspace id that uninstalled
  try {
    await prisma.workspace.updateMany({
      where: { slackTeamId: context.teamId },
      data: { botToken: "" }, // or delete the row
    });
  } catch (err) {
    console.error("Failed to clean workspace", context.teamId, err);
  }
});

cron.schedule(
  "0 9 * * 1-5",
  async () => {
    console.log("⏰ Sending daily stand-up reminders...");
    const workspaces = await prisma.workspace.findMany();
    for (const workspace of workspaces) {
      const users = await prisma.user.findMany({
        where: { workspaceId: workspace.id },
      });

      const client = new App({
        token: workspace.botToken,
        signingSecret: process.env.SLACK_SIGNING_SECRET,
      }).client;

      for (const user of users) {
        try {
          await client.chat.postMessage({
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

    const workspaces = await prisma.workspace.findMany();
    for (const workspace of workspaces) {
      const client = new App({
        token: workspace.botToken,
      }).client;
      const entries = await prisma.standupEntry.findMany({
        where: {
          workspaceId: workspace.id,
          date: {
            gte: todayUTC.toDate(),
            lt: tomorrowUTC.toDate(),
          },
        },
        include: { user: true },
      });
      if (entries.length === 0) {
        await client.chat.postMessage({
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

      await client.chat.postMessage({
        channel: workspace.channelId || process.env.DEFAULT_DIGEST_CHANNEL_ID,
        token: workspace.botToken,
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
    }
  },
  {
    timezone: "Africa/Nairobi",
  }
);

cron.schedule(
  "0 9 * * 6",
  async () => {
    const workspaces = await prisma.workspace.findMany();
    for (const workspace of workspaces) {
      const end = dayjs().utc().startOf("day");
      const start = end.subtract(7, "day");
      const client = new App({
        token: workspace.botToken,
      }).client;
      const entries = await prisma.standupEntry.findMany({
        where: {
          workspaceId: workspace.id,
          date: {
            gte: start.toDate(),
            lt: end.toDate(),
          },
        },
        include: { user: true },
      });
      const users = await prisma.user.findMany({
        where: { workspaceId: workspace.id },
      });
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
      const channel =
        workspace.channelId || process.env.DEFAULT_DIGEST_CHANNEL_ID;
      if (!channel) continue;

      await client.chat.postMessage({
        token: workspace.botToken,
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
  const workspace = await prisma.workspace.findUnique({
    where: { slackTeamId },
  });
  if (!workspace) {
    await client.chat.postEphemeral({
      channel: body.channel_id,
      user: body.user_id,
      text: "Workspace not found in the database.",
    });
    return;
  }

  const users = await prisma.user.findMany({
    where: { workspaceId: workspace.id },
  });
  const end = dayjs().utc().startOf("day");
  const start = end.subtract(days, "day");

  const weekdays = countWeekdays(start, end);

  const entries = await prisma.standupEntry.findMany({
    where: {
      workspaceId: workspace.id,
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
  return await prisma.workspace.findUnique({
    where: { slackTeamId: team_id }
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
        update: { workspaceId: team.id, realName },
        create: { slackUserId: userId, workspaceId: team.id, realName },
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
