import { Command } from '../interfaces';

const ping: Command = {
  name: 'ping',
  aliases: [],
  permissions: ['ADMINISTRATOR'],
  usage: '',
  run: async (client, msg, args) => {
    const pingMessage = await msg.channel.send('Loading...');
    pingMessage
      .edit(
        `🚀 Latency is ${
          pingMessage.createdTimestamp - msg.createdTimestamp
        }ms. API Latency is ${Math.round(client.ws.ping)}ms`
      )
      .catch((error) => console.error(error));
  },
};

export default ping;
