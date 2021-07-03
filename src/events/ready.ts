import { Client } from "discord.js";

const event = {
  name: "ready",
  run: async (client: Client) => {
    // Custom presence
    client.user?.setPresence({
      activity: {
        name: "I can see you!",
        type: "WATCHING",
      },
      status: "online",
    });
    console.log(`Logged in as: ${client.user?.tag}!`);
  },
};

export default event;
