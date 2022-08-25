import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCiTFj1QMzGAniqE2ZRU-MbGHFZoRFiMug",
    authDomain: "wegus-84c7c.firebaseapp.com",
    projectId: "wegus-84c7c",
    storageBucket: "wegus-84c7c.appspot.com",
    messagingSenderId: "197486395828",
    appId: "1:197486395828:web:4400e54ee3aebc100fb2e1"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);


export const DB = getFirestore(app)

