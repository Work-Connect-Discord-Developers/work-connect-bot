const ping: object = {
  name: "ping",
  aliases: [""],
  description: "",
  usage: "",
  run: (client: object, msg: any, args: any) => {
    msg.channel.send("🚀 POOOONG!");
  },
};

export default ping;
