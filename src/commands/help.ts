import { Message } from "discord.js";

const help: object = {
  name: "help",
  aliases: ["h"],
  description: "Shows bot commands list.",
  usage: "!help",
  run: (client: any, msg: Message, args: string[]) => {
    msg.reply("Ups! Help command aren't available.");
  },
};

export default help;
