import { config } from 'dotenv';

// Environment Variables
const NODE_ENV = process.env.NODE_ENV;
config({ path: `.env.${NODE_ENV}` });

const getEnvVar = (value: string): string => {
  const ret = process.env[value];

  if (ret === undefined) {
    throw new Error(`${process.env}.${value} is undefined!`);
  } else {
    return ret;
  }
};

export default getEnvVar;
