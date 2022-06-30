import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB04mwJrylmfcMFzUO04ANzK8IbKc0uFH8",
    authDomain: "twitter-clone-98795.firebaseapp.com",
    projectId: "twitter-clone-98795",
    storageBucket: "twitter-clone-98795.appspot.com",
    messagingSenderId: "920391117674",
    appId: "1:920391117674:web:25ff065745f81d3b9d5313"
  };


const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { db , auth };