import { Command } from '../interfaces';

const command: Command = {
  name: 'ranking',
  description: 'Show job ranking.',
  aliases: [],
  permissions: [],
  usage: '!ranking [@user_mention]',
  run: async (client, msg, args) => {
    msg
      .reply("this command isn't available yet.")
      .catch((error) => console.error(error));
  },
};

export default command;
