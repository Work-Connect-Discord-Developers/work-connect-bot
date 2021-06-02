import getEnvVar from "./helpers/getEnvVar";

const BOT_PREFIX: string = getEnvVar("BOT_PREFIX");
const BOT_TOKEN: string = getEnvVar("BOT_TOKEN");

const discord = {
  BOT_PREFIX,
  BOT_TOKEN,
};

export default discord;
