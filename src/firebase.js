import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB9tHkTfUcfLuUir8wfHT8lyoL1j1Dq7XE",
    authDomain: "freelancer-clone-37e66.firebaseapp.com",
    projectId: "freelancer-clone-37e66",
    storageBucket: "freelancer-clone-37e66.appspot.com",
    messagingSenderId: "503724042414",
    appId: "1:503724042414:web:f501b2a2c9186595db653f",
    measurementId: "G-3NZQH8Z55Z"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };