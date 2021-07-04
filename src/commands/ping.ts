import { Command } from "../interfaces";

const ping: Command = {
  name: "ping",
  aliases: [],
  permissions: ["ADMINISTRATOR"],
  usage: "",
  run: async (client, msg, args) => {
    msg.channel.send("🚀 POOOONG!").catch(console.error);
  },
};

export default ping;
