
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAy5i-v53JeOu1Prlyv0QsSv5e84IvTN0c",
  authDomain: "ptoject-1-e89aa.firebaseapp.com",
  projectId: "ptoject-1-e89aa",
  storageBucket: "ptoject-1-e89aa.appspot.com",
  messagingSenderId: "972985433313",
  appId: "1:972985433313:web:19c9acb08dded43b244ba0",
  measurementId: "G-0306X3RK1F"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth (app) 
const provider = new GoogleAuthProvider();
export {auth,provider};