// Environment Variables
if (process.env.NODE_ENV !== "production") {
  const NODE_ENV = process.env.NODE_ENV;
  require("dotenv").config({ path: `.env.${NODE_ENV}` });
}

const BOT_PREFIX = process.env.PREFIX;
const BOT_TOKEN = process.env.TOKEN;

// Discord Bot
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  // Custom presence
  client.user.setPresence({
    activity: {
      name: "I can see you!",
      type: "WATCHING",
    },
    status: "online",
  });
  console.log(`Logged in as: ${client.user.tag}!`);
});

client.login(BOT_TOKEN);
