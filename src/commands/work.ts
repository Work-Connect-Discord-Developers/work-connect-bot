import { Role } from 'discord.js';
import { Command } from '../interfaces';
import addHours from '../helpers/addHours';
import hasRole from '../helpers/hasRole';

const command: Command = {
  name: 'work',
  aliases: [],
  permissions: [],
  usage: '',
  run: async (client, msg, args) => {
    // I must declare this as a global variable and pass it as an argument to the functions that need it
    const WORKING_ROLE_ID: string = '732242095351529622';

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
