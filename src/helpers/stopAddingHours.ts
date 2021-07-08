import { firebase } from '../config/index';
import showDocs from './showDocs';

const stopAddingHours = (member: any) => {
  const workingReference = firebase.collection('working');
  const working = {
    amount: 100,
  };

  workingReference
    .get()
    .then((snapshot) => {
      const document = showDocs(snapshot);
      //  document tiene almacenado en valor de los working amount
    })
    .catch((error) => console.error(error.message));

  throw new Error('Function not implemented.');
};

export default stopAddingHours;
