import { Role } from 'discord.js';
import { Command } from '../interfaces';
import addHours from '../helpers/addHours';
import hasRole from '../helpers/hasRole';
import { discord } from '../config/index';

const command: Command = {
  name: 'work',
  aliases: [],
  permissions: [],
  usage: '',
  run: async (client, msg, args) => {
    const { WORKING_ROLE_ID } = discord;

    // const isWorking: Role | undefined = msg.member?.roles.cache.find(
    //   (role) => role.id === WORKING_ROLE_ID
    // ); // this will be a function

    const isWorking = await hasRole(msg.member, WORKING_ROLE_ID);

    if (!isWorking) {
      await addHours(msg.member)
        .then(() => msg.reply('you started to work.'))
        .catch((error) => console.error(error.message));
    } else {
      await msg
        .reply('you are already working. Use `!unwork` to stop working.')
        .catch((error) => console.error(error.message));
    }
  },
};

export default command;
