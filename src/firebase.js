import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyA8PD8qhaAFaaCipTdVWz3BsjCL-o6CzYA",
    authDomain: "indigo-56aea.firebaseapp.com",
    projectId: "indigo-56aea",
    storageBucket: "indigo-56aea.appspot.com",
    messagingSenderId: "735037483740",
    appId: "1:735037483740:web:5dd1f9920b3e671fe8a219",
    measurementId: "G-H7MELVCLFB"
  };

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

export { messaging };
