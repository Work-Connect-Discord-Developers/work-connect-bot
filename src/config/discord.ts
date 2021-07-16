import getEnvVar from './helpers/getEnvVar';

const BOT_PREFIX: string = getEnvVar('BOT_PREFIX');
const BOT_TOKEN: string = getEnvVar('BOT_TOKEN');
const WORKING_ROLE_ID: string = getEnvVar('WORKING_ROLE_ID');

const discord = {
  BOT_PREFIX,
  BOT_TOKEN,
  WORKING_ROLE_ID,
};

export default discord;
