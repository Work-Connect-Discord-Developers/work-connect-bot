import { Command } from '../interfaces';

const command: Command = {
  name: 'hours',
  description: 'Shows the number of hours a user has worked.',
  aliases: [],
  permissions: [],
  usage: '!hour [@user_mention]',
  run: async (client, msg, args) => {
    msg
      .reply("this command isn't available yet.")
      .catch((error) => console.error(error));
  },
};

export default command;
