import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAE0IpuATABwjce8v6MzZar3Ont3urLaS4",
  authDomain: "e-library-e3abd.firebaseapp.com",
  databaseURL: "https://e-library-e3abd-default-rtdb.firebaseio.com",
  projectId: "e-library-e3abd",
  storageBucket: "e-library-e3abd.appspot.com",
  messagingSenderId: "680049723530",
  appId: "1:680049723530:web:e1334101865e062bda0573"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore()
