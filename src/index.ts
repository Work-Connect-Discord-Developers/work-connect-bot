// Environment Variables
import { config } from "dotenv";
if (process.env.NODE_ENV !== "production") {
  const NODE_ENV = process.env.NODE_ENV;
  config({ path: `.env.${NODE_ENV}` });
}

const BOT_PREFIX = process.env.PREFIX;
const BOT_TOKEN = process.env.TOKEN;

// Discord Bot
import { Client } from "discord.js";
const client: Client = new Client();

client.on("ready", () => {
  // Custom presence
  client.user?.setPresence({
    activity: {
      name: "I can see you!",
      type: "WATCHING",
    },
    status: "online",
  });
  console.log(`Logged in as: ${client.user?.tag}!`);
});

// Command ping
client.on("message", (msg) => {
  if (msg.content.startsWith(`${BOT_PREFIX}ping`)) {
    msg.channel.send("🚀 POOOONG!");
  }
});

client.login(BOT_TOKEN);
