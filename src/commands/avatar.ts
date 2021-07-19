import { Command } from '../interfaces';

const command: Command = {
  name: 'avatar',
  description: 'Show the user avatar.',
  aliases: [],
  permissions: [],
  usage: '!avatar [@user_mention]',
  run: async (client, msg, args) => {
    msg
      .reply(msg.author.displayAvatarURL())
      .catch((error) => console.error(error));
  },
};

export default command;
