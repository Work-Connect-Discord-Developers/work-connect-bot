import { discord, firebase } from '../config/index';
import showDocs from './showDocs';

const stopAddingHours = async (member: any) => {
  const { WORKING_ROLE_ID } = discord;

  // remove working role to the user
  await member?.roles.remove(WORKING_ROLE_ID);

  // if (workingAmount > 0) {
  // decrease current working amount in db collection
  // }

  // ---- DB CONNECTION ----

  // const workingReference = firebase.collection('working');
  // const working = {
  //   amount: 100,
  // };

  // workingReference
  //   .get()
  //   .then((snapshot) => {
  //     const document = showDocs(snapshot);
  //     //  document tiene almacenado en valor de los working amount
  //   })
  //   .catch((error) => console.error(error.message));

  // throw new Error('Function not implemented.');
};

export default stopAddingHours;
