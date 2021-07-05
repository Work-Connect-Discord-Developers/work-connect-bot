import { MessageEmbed } from 'discord.js';
import { Command } from '../interfaces';

const command: Command = {
  name: 'embed',
  aliases: [],
  permissions: [],
  usage: '',
  run: async (client, msg, args) => {
    const embed = new MessageEmbed()
      .setTitle('This is a Work Connect Embed message.')
      .setColor(0xff0000)
      .setDescription('Welcome to Work Connect!!');
    msg.channel.send(embed).catch((error) => console.error(error));
  },
};

export default command;
