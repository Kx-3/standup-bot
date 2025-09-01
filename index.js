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

app.command("/standup", async ({ body, ack, client }) => {
  await ack();
  const slackTeamId = body.team_id;
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
    where: { slackUserId: body.user_id },
    update: {},
    create: { slackUserId: body.user_id, teamId: team.id },
  });
  const tz = team.timezone || process.env.DEFAULT_TEAM_TZ;
  const todayTz = dayjs().tz?.(tz) ?? dayjs(); // if no tz plugin, assume server tz
  const yDateLocal = todayTz.subtract(1, "day").startOf("day");
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
    trigger_id: body.trigger_id,
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
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Slack Bolt app is running!");
})();
