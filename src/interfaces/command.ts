import { Client, Message } from "discord.js";

interface Run {
  (client: Client, msg: Message, args: string[]): void;
}

export interface Command {
  name: string;
  description?: string;
  permissions?: string[];
  aliases?: string[];
  usage?: string;
  run: Run;
}
