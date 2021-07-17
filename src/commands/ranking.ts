import { Command } from '../interfaces';

const command: Command = {
  name: 'ranking',
  aliases: [],
  permissions: [],
  usage: '',
  run: async (client, msg, args) => {
    msg
      .reply("this command isn't available yet.")
      .catch((error) => console.error(error));
  },
};

export default command;
