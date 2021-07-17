// Environment Variables
import { config } from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
  const NODE_ENV = process.env.NODE_ENV;
  config({ path: `.env.${NODE_ENV}` });
}

const getEnvVar = (value: string): string => {
  const ret = process.env[value];
  if (ret === undefined)
    throw new Error(`${process.env}.${value} is undefined!`);
  return ret;
};

export default getEnvVar;
