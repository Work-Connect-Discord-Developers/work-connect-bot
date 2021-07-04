import { Event } from "../interfaces";

const event: Event = {
  name: "ready",
  run: async (client) => {
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
