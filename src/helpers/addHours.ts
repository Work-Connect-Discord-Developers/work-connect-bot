const addHours = async (member: any): Promise<void> => {
  try {
    // I must declare this as a global variable and pass it as an argument to the functions that need it
    const WORKING_ROLE_ID: string = '732242095351529622';

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
