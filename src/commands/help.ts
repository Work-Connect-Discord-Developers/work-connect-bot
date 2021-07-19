import { Command } from '../interfaces';
import { MessageEmbed } from 'discord.js';
import { readdirSync } from 'fs';

const command: Command = {
  name: 'help',
  description: 'Shows the available commands list.',
  aliases: [],
  permissions: [],
  usage: '!help',
  run: async (client, msg, args) => {
    // Get a list of the commands on /src/commands/
    const getCommandsList = (): Array<Object> => {
      const commandList: Array<Object> = [];
      const commandsFiles: string[] = readdirSync('./src/commands/').filter(
        (event) => event.endsWith('.js') || event.endsWith('.ts')
      );

      commandsFiles.map((file) => {
        const command = require(`./${file.replace('.ts', '.js')}`);
        commandList.push(command);
      });

      return commandList;
    };

    // Return an embed command with all available commands
    const commandsEmbed = (commands: Array<Object>): MessageEmbed => {
      const data: any[] = [];

      commands.map((command: any) => {
        const commandData: Command = command.default;
        const commandHasData: boolean =
          commandData.usage?.length! > 0 &&
          commandData.description?.length! > 0;

        if (commandHasData) {
          data.push({
            name: commandData.usage!,
            value: commandData.description!,
          });
        }
      });

      const logoURL = 'https://avatars.githubusercontent.com/u/78219418';
      const helpEmbed: MessageEmbed = new MessageEmbed()
        .setAuthor('Work Connect', logoURL, 'https://work-connect.github.io/')
        .setThumbnail(logoURL)
        .setTitle('Available command list')
        .addFields(data)
        .setFooter('This message is from the official server bot.')
        .setColor('#eeeeee');

      return helpEmbed;
    };

    // Send embed commands to current channel
    await msg.channel
      .send(commandsEmbed(getCommandsList()))
      .catch((error) => console.error(error));
  },
};

export default command;
