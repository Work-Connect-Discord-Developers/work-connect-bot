import { Message } from "discord.js";

const say: object = {
  name: "say",
  aliases: [""],
  description: "",
  usage: "",
  run: (client: object, msg: Message, args: string[]) => {
    if (!args[0]) return;
    msg.channel.send(args.join(" "));
  },
};

export default say;
