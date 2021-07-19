import { Command } from '../interfaces';

const command: Command = {
  name: 'say',
  description: '',
  aliases: [],
  permissions: ['MANAGE_MESSAGES'],
  usage: '',
  run: async (client, msg, args) => {
    const MESSAGE = args.join(' ');
    const ARGUMENTS_LENGTH = args.length;
    const NO_ARGUMENTS = ARGUMENTS_LENGTH === 0;

    NO_ARGUMENTS
      ? msg
          .reply('you must add arguments to your message.')
          .catch((error) => console.error(error))
      : msg.channel.send(MESSAGE).catch((error) => console.error(error));
  },
};

export default command;
