import { Command } from "../interfaces";

const command: Command = {
  name: "say",
  aliases: [],
  permissions: [],
  usage: "",
  run: async (client, msg, args) => {
    const MESSAGE = args.join(" ");
    const ARGUMENTS_LENGTH = args.length;
    const NO_ARGUMENTS = ARGUMENTS_LENGTH === 0;

    NO_ARGUMENTS
      ? msg
          .reply("you must add arguments to your message.")
          .catch(console.error)
      : msg.channel.send(MESSAGE).catch(console.error);
  },
};

export default command;
