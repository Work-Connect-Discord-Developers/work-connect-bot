import { Command } from '../interfaces';
import addHours from '../helpers/addHours';

const command: Command = {
  name: 'work',
  aliases: [],
  permissions: [],
  usage: '',
  run: async (client, msg, args) => {
    const workerRole: string = 'Personas trabajando';
    const isWorking = msg.member?.roles.cache.find(
      (role) => role.name === workerRole
    );

    if (!isWorking) {
      addHours(msg.member);
      await msg
        .reply('you started to work.')
        .catch((error) => console.error(error.message));
    } else {
      await msg
        .reply('you are already working. Use `!unwork` to stop working.')
        .catch((error) => console.error(error.message));
    }
  },
};

export default command;
