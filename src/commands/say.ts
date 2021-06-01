const say: object = {
  name: "say",
  aliases: [""],
  description: "",
  usage: "",
  run: (client: object, msg: any, args: any) => {
    if (!args[0]) return;
    msg.channel.send(args.join(" "));
  },
};

export default say;
