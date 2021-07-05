import { Command } from '../interfaces';

const command: Command = {
  name: 'avatar',
  aliases: [],
  permissions: [],
  usage: '',
  run: async (client, msg, args) => {
    msg
      .reply(msg.author.displayAvatarURL())
      .catch((error) => console.error(error));
  },
};

export default command;
