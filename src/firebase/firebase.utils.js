import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { initialize } from "workbox-google-analytics";

const config = {
    apiKey: "AIzaSyBoeYBEt2IfZH_Snl6iq33jMD3cQ3AWKPA",
    authDomain: "crwn-db-eec7e.firebaseapp.com",
    projectId: "crwn-db-eec7e",
    storageBucket: "crwn-db-eec7e.appspot.com",
    messagingSenderId: "634623842035",
    appId: "1:634623842035:web:8a3daf2440204e99760986",
    measurementId: "G-0YNE8N08SY"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:"select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
