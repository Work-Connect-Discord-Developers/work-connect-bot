import { Role } from 'discord.js';
import { Command } from '../interfaces';
import stopAddingHours from '../helpers/stopAddingHours';
import hasRole from '../helpers/hasRole';

const command: Command = {
  name: 'unwork',
  aliases: [],
  permissions: [],
  usage: '',
  run: async (client, msg, args) => {
    // I must declare this as a global variable and pass it as an argument to the functions that need it
    const WORKING_ROLE_ID: string = '732242095351529622';

    // const isWorking: Role | undefined = msg.member?.roles.cache.find(
    //   (role) => role.id === WORKING_ROLE_ID
    // );

    const isWorking = await hasRole(msg.member, WORKING_ROLE_ID).catch(
      (error) => console.error(error.message)
    );

    if (!isWorking) {
      await msg.reply("you aren't working. Use `!work` to start working.");
    } else {
      await stopAddingHours(msg.member)
        .then(() => msg.reply('you stopped working.'))
        .catch((error) => console.error(error.message));
    }
  },
};

export default command;
