import { Message } from "discord.js";

const ping: object = {
  name: "ping",
  aliases: [""],
  description: "",
  usage: "",
  run: (msg: Message, args: string[]) => {
    msg.channel.send("🚀 POOOONG!");
  },
};

export default ping;
