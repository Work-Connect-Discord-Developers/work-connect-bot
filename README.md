# Work Connect Bot

This is a **Discord Bot** for the [Work Connect](https://discord.gg/fyGx7BZ) server. It is a bot that counts the hours you work on a task and has other productivity features.

## Installation

This bot runs on `node.js`. Install [Node](https://nodejs.org/) for npm to use.

Run `npm install` in the bot directory and make sure it passes.

Now set up your `.evn.development` and run `npm run dev` to test the bot out in a development environment!

Your `.env.development` file would look like this:

```js
TOKEN = your_token;
PREFIX = your_prefix;
```

- `token`, the token of the bot available on the [Discord Developers](https://discord.com/developers/applications) section.
- `prefix`, the prefix that will be set to use the bot.

## Command template

The commands are inside the directory `/src/commands/`, each command has its file `command_name.ts`.

```ts
const command_name: object = {
  name: "",
  aliases: [""],
  description: "",
  usage: "",
  run: (client: object, msg: any, args: any) => {
    // Code...
  },
};

export default command_name;
```

- `name`, is the command key and is the same of command name.
- `aliases`, are other shorter ways to call the command. `Eg: play > p`
- `description`, information so that the user knows the functionality that this command do.
- `run`, algorithm for the command can work.
