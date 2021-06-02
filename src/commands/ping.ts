import { Message } from "discord.js";

const ping: object = {
  name: "ping",
  aliases: [""],
  description: "",
  usage: "",
  run: (client: object, msg: Message, args: string[]) => {
    console.log(client)
    msg.channel.send("🚀 POOOONG!");
  },
};

export default ping;
