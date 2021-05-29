const Discord = require("discord.js");
const client = new Discord.Client();

// Environment Variables
const NODE_ENV = process.env.NODE_ENV || "development";
require("dotenv").config({ path: `.env.${NODE_ENV}` });

const BOT_PREFIX = process.env.PREFIX;
const BOT_TOKEN = process.env.TOKEN;

// Discord Bot
client.on("ready", () => {
  console.log(`Logged in as: ${client.user.tag}!`);
});

client.login(BOT_TOKEN);
