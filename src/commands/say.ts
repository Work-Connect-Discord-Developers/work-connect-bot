import { Message } from "discord.js";

const say: object = {
  name: "say",
  aliases: [""],
  description: "",
  usage: "",
  run: (client: object, msg: Message, args: string[]) => {
    const MESSAGE = args.join(" ");
    const ARGUMENTS_LEGTH = args.length;
    const NO_ARGUMENTS = ARGUMENTS_LEGTH === 0;

    NO_ARGUMENTS
      ? msg.reply("you must add arguments to your message.")
      : msg.channel.send(MESSAGE);
  },
};

export default say;
