import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB0YWTW5UDENXDF9fwfO4PxbhRt9Je4xLU",
  authDomain: "andres-restorapp.firebaseapp.com",
  projectId: "andres-restorapp",
  storageBucket: "andres-restorapp.appspot.com",
  messagingSenderId: "641736619012",
  appId: "1:641736619012:web:d54790e04a939c7e8df151"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);