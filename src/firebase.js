import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBC0AGYG3IVodYdqwAZb4CptHR9lUpCLiQ",
    authDomain: "clone-8776d.firebaseapp.com",
    projectId: "clone-8776d",
    storageBucket: "clone-8776d.appspot.com",
    messagingSenderId: "158123264268",
    appId: "1:158123264268:web:f9f8b50e6c384f06a3a129",
    measurementId: "G-9WWRWYVFQB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };