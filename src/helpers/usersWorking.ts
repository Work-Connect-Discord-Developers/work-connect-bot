const usersWorking = async (data: any) => {
  //Returns a string with the number of working users.
  if (data === 0) return 'no person working.';
  if (data === 1) return `${data} person working.`;
  if (data >= 2) return `${data} people working.`;
};

export default usersWorking;
