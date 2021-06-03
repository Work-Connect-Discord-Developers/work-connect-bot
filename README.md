# Work Connect Bot

This is a **Discord Bot** for the [Work Connect](https://discord.gg/fyGx7BZ) server. It is a bot that counts the hours you work on a task and has other productivity features.

## Contribution

To contribute to the project you must create an `issue` with the `feature`, `error`, `build`, `chore`, `documentation`, `refactoring`, `performance`, `test` or whatever you are going to work on.

**Steps:**

1. Fork this repository.
2. Clone the fork repository.
3. Create a new branch with the name of your feature. _(you must create a branch for each **feature**)_
4. Make your changes in this branch.
5. Send your pull request to the `dev` branch.

_To name the `commits`, `issues` and `pull requests` we are using the [Conventional Commits](https://www.conventionalcommits.org/) specification, it must follow that structure._

## Keep your Fork updated

When you have the Fork repository cloned on your PC, the first thing you have to do is create a remote to `work-connect/work-connect-bot` using:`git remote add upstream https://github.com/work-connect/work-connect-bot.git` (You only have to do this the first time you clone the repository).

Then every time a change is made in `work-connect/work-connect-bot` and you want to bring it to your fork use the following commands:

1. `git pull upstream dev`
2. `git push`

**Note:** remember to be located within the branch you wanna update.

As a good practice, it is always recommended to execute these two commands before starting to work, _(just in case there is any change)_:

1. `git pull upstream dev`
2. `gil pull`

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
