import { Command } from "../interfaces";

const ping: Command = {
  name: "ping",
  aliases: [],
  permissions: [],
  usage: "",
  run: async (client, msg, args) => {
    msg.channel.send("🚀 POOOONG!").catch(console.error);

    // console.log("pong");
  },
};

export default ping;
