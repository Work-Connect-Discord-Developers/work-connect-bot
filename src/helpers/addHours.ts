import { discord } from '../config';

const addHours = async (member: any): Promise<void> => {
  try {
    const { WORKING_ROLE_ID } = discord;

    // add working role to the user
    await member?.roles.add(WORKING_ROLE_ID);

    // increase current working amount in db collection

    // const maxWorkUserToday: number = 1;
    // increase maxWorkUserToday;
  } catch (error) {
    console.error(error.message);
  }
};

export default addHours;
