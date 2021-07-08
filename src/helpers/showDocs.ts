import firebase from 'firebase';

const showDocs = (snapshot: firebase.firestore.QuerySnapshot) => {
  const docs: any[] = [];

  snapshot.forEach((childSnap) => {
    docs.push({
      id: childSnap.id,
      ...childSnap.data(),
    });
  });

  console.log(docs);
  return docs;
};

export default showDocs;
