import { Message } from "discord.js";
import { Event } from "../interfaces";
import { discord } from "../config/index";

const event: Event = {
  name: "message",
  run: async (client, msg: Message) => {
    if (msg.author.bot) return;
    if (msg.channel.type === "dm") return;
    if (!msg.content.startsWith(discord.BOT_PREFIX)) return;

    // Arguments are all messages after prefix and command
    const PREFIX_LENGTH: number = discord.BOT_PREFIX.length;
    const ARGUMENTS: string[] = msg.content
      .slice(PREFIX_LENGTH)
      .trim()
      .split(/ +/g);
    const COMMAND: string = ARGUMENTS.shift()?.toLocaleLowerCase()!;

    // Command Handler
    try {
      const COMMAND_FILE = require(`../commands/${COMMAND}`) || null;
      if (COMMAND_FILE) COMMAND_FILE.default.run(client, msg, ARGUMENTS);
    } catch (error) {
      msg.channel.send("This command does not exist!!");
    }
  },
};

export default event;
