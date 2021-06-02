import firebase from "firebase/app";
import "firebase/firestore";
import getEnvVar from "./helpers/getEnvVar";

const apiKey = getEnvVar("FIREBASE_API_KEY");
const authDomain = getEnvVar("FIREBASE_AUTH_DOMAIN");
const projectId = getEnvVar("FIREBASE_PROJECT_ID");
const storageBucket = getEnvVar("FIREBASE_STORAGE_BUCKET");
const messagingSenderId = getEnvVar("FIREBASE_MESSAGING_SENDER_ID");
const appId = getEnvVar("FIREBASE_APP_ID");
const measurementId = getEnvVar("FIREBASE_MEASUREMENT_ID");

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db, firebase };
