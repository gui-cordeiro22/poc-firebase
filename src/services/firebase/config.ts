// Dependencies
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Utils
import {
  firebaseApiKey,
  firebaseAuthDomain,
  firebaseDatabaseURL,
  firebaseAppId,
  firebaseProjectId,
  firebaseStorageBucket,
  firebaseMessagingSenderId,
  firebaseMeasurementId,
} from "../../utils/constants";

const userAccountFirebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: firebaseAuthDomain,
  databaseURL: firebaseDatabaseURL,
  appId: firebaseAppId,
  projectId: firebaseProjectId,
  storageBucket: firebaseStorageBucket,
  messagingSenderId: firebaseMessagingSenderId,
  measurementId: firebaseMeasurementId,
};

const userAccountApp = initializeApp(userAccountFirebaseConfig);

const dataBase = getDatabase(userAccountApp);

const auth = getAuth(userAccountApp);

export { dataBase, auth };
