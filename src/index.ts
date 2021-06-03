// Environment Variables
import { config } from "dotenv";
if (process.env.NODE_ENV !== "production") {
  const NODE_ENV = process.env.NODE_ENV;
  config({ path: `.env.${NODE_ENV}` });
}

const getEnvVar = (value: string): string => {
  const ret = process.env[value];
  if (ret === undefined)
    throw new Error(`${process.env}.${value} is undefined!`);
  return ret;
};

const BOT_PREFIX: string = getEnvVar("PREFIX");
const BOT_TOKEN: string = getEnvVar("TOKEN");

// const BOT_PREFIX: string = process.env.PREFIX;
// const BOT_TOKEN: string = process.env.TOKEN;

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
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;
  if (!msg.content.startsWith(BOT_PREFIX)) return;

  // Arguments are all messages after prefix and command
  const ARGUMENTS: string = msg.content;
  const PREFIX_LENGHT: number = BOT_PREFIX.length;
  const NO_PREFIX_ARGUMENTS: string = ARGUMENTS.slice(PREFIX_LENGHT);
  const ARGUMENTS_ARRAY: any = NO_PREFIX_ARGUMENTS.trim().split(/ +/g);
  const COMMAND: string = ARGUMENTS_ARRAY.shift().toLowerCase();

  // Command Handler
  try {
    const COMMAND_FILE = require(`./commands/${COMMAND}`) || null;
    if (COMMAND_FILE) COMMAND_FILE.default.run(msg, ARGUMENTS_ARRAY);
  } catch (error) {
    msg.channel.send("This command does not exist!!");
  }
});

client.login(BOT_TOKEN);
