// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider ,signInWithPopup ,signInWithRedirect}  from "firebase/auth";
import {getFirestore} from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyBkqzsftO_DpOShDmK0qD7XtX87uuEu_yw",
  authDomain: "auth-eb319.firebaseapp.com",
  projectId: "auth-eb319",
  storageBucket: "auth-eb319.appspot.com",
  messagingSenderId: "77355742179",
  appId: "1:77355742179:web:c56c587170468d8f6026d6",
  measurementId: "G-G7CBKY7HNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);


const provider  = new GoogleAuthProvider()

export const signInWithGoogle = () =>
{
  signInWithPopup(auth , provider).then((result)=>{
   
   const name = result.user.displayName;
   const emails = result.user.email;
   
   const photo = result.user.photoURL;

   localStorage.setItem("names",name);
   localStorage.setItem("mail",emails);
 localStorage.setItem("pics",photo);
 localStorage.setItem("authenticate",true);
   window.location.reload();

  }).catch((error)=>
  {
    console.error(error);
  });
};