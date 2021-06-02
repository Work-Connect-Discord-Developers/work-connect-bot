# Work Connect Bot

This is a **Discord Bot** for the [Work Connect](https://discord.gg/fyGx7BZ) server. It is a bot that counts the hours you work on a task and has other productivity features.

## Installation

This bot runs on `node.js`. Install [Node](https://nodejs.org/) for npm to use.

Run `npm install` in the bot directory and make sure it passes.

Now set up your `.evn.development` and run `npm run dev` to test the bot out in a development environment!

Your `.env.development` file would look like this:

```js
# Dicord Config
BOT_TOKEN=your_bot_token
BOT_PREFIX=your_bot_prefix

# Firebase Config
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id
FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```

- `token`, the token of the bot available on the [Discord Developers](https://discord.com/developers/applications) section.
- `prefix`, the prefix that will be set to use the bot.

## Command template

The commands are inside the directory `/src/commands/`, each command has its file `command_name.ts`.

```ts
import { Message } from "discord.js";

const command_name: object = {
  name: "",
  aliases: [""],
  description: "",
  usage: "",
  run: (msg: Message, args: string[]) => {
    // Code...
  },
};

export default command_name;
```

- `name`, is the command key and is the same of command name.
- `aliases`, are other shorter ways to call the command. `Eg: play > p`
- `description`, information so that the user knows the functionality that this command do.
- `run`, algorithm for the command can work.
