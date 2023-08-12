import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';


const firebaseConfig = {
  apiKey: "<your API key>",
  authDomain: "<your API key data>",
  projectId: "<your API key data>",
  storageBucket: "<your API key data>",
  messagingSenderId: "<your API key data>",
  appId: "<your API key data>"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);