import { Message } from 'discord.js';
import { Event } from '../interfaces';
import { discord } from '../config/index';
import permissionsChecker from '../helpers/permissionsChecker';

const event: Event = {
  name: 'message',
  run: async (client, msg: Message) => {
    if (msg.author.bot) return;
    if (msg.channel.type === 'dm') return;
    if (!msg.content.startsWith(discord.BOT_PREFIX)) return;

    // Arguments are all messages after prefix and command
    const PREFIX_LENGTH: number = discord.BOT_PREFIX.length;
    const ARGUMENTS: string[] = msg.content
      .slice(PREFIX_LENGTH)
      .trim()
      .split(/ +/g);
    const COMMAND: string = ARGUMENTS.shift()?.toLocaleLowerCase()!;

    // Command Handler
    try {
      const COMMAND_FILE = await require(`../commands/${COMMAND}`);
      const userHasPermissions = permissionsChecker(
        COMMAND_FILE.default.permissions,
        msg.member?.permissions.toArray()!
      );

      if (!COMMAND_FILE.default.permissions || userHasPermissions) {
        COMMAND_FILE.default.run(client, msg, ARGUMENTS);
      } else {
        msg.channel.send('You do not have permissions to use this command.');
      }
    } catch (e) {
      return;
    }
  },
};

export default event;
