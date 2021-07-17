import firebase from 'firebase/app';
import 'firebase/firestore';
import { getEnvVar } from '../helpers';
import { FirebaseConfig } from '../interfaces';

const firebaseConfig: FirebaseConfig = {
  apiKey: getEnvVar('FIREBASE_API_KEY'),
  authDomain: getEnvVar('FIREBASE_AUTH_DOMAIN'),
  projectId: getEnvVar('FIREBASE_PROJECT_ID'),
  storageBucket: getEnvVar('FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: getEnvVar('FIREBASE_MESSAGING_SENDER_ID'),
  appId: getEnvVar('FIREBASE_APP_ID'),
  measurementId: getEnvVar('FIREBASE_MEASUREMENT_ID'),
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
