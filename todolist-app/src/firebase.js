import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC7VyiY6eYtsIoLzfLy4yQUobtgRHyCsdI",
    authDomain: "todolistapp-f7057.firebaseapp.com",
    projectId: "todolistapp-f7057",
    storageBucket: "todolistapp-f7057.appspot.com",
    messagingSenderId: "367125556698",
    appId: "1:367125556698:web:dbce90dfc98ca3ae2124e3",
    measurementId: "G-QNPB69SB19"
  });

const db = firebaseApp.firestore();

export default db;