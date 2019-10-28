import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBdiNjyc_5kM8vu1Mr8hzdjcYAtlYL3kBc",
  authDomain: "portfolio-aa4d8.firebaseapp.com",
  databaseURL: "https://portfolio-aa4d8.firebaseio.com",
  projectId: "portfolio-aa4d8",
  storageBucket: "portfolio-aa4d8.appspot.com",
  messagingSenderId: "117695632883",
  appId: "1:117695632883:web:bd63331016e2b473"
};

//initialize firebase
firebase.initializeApp(config);

// firebase.firestore().settings(settings);

export default firebase;
