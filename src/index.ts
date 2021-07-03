import { Client } from "discord.js";
import { discord } from "./config/index";
import { readdirSync } from "fs";

const client: Client = new Client();

// Event Handler
const eventsDir: string[] = readdirSync("./src/events/").filter(
  (event) => event.endsWith(".js") || event.endsWith(".ts")
);
eventsDir.forEach((event: string) => {
  const eventPath = `./events/${event.replace(".ts", ".js")}`;
  const { name, run } = require(eventPath).default;
  client.on(name, (...args) => run(client, ...args));
});

client.login(discord.BOT_TOKEN);
