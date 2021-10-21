import * as firebase from "firebase";

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAGR0DZVdwD2V-YFEc59UGi7zW7l41uOpg",
  authDomain: "task-manager-e867b.firebaseapp.com",
  projectId: "task-manager-e867b",
  storageBucket: "task-manager-e867b.appspot.com",
  messagingSenderId: "165006107797",
  appId: "1:165006107797:web:56851f7f0a0782d152279c",
  measurementId: "G-ME3QPCLP7H",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
