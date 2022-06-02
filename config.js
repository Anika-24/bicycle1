import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCVuT3slCaVejvLhVQUYEpS2h_-IvCta28",
    authDomain: "complaint-forum-6c5c7.firebaseapp.com",
    projectId: "complaint-forum-6c5c7",
    storageBucket: "complaint-forum-6c5c7.appspot.com",
    messagingSenderId: "776255242280",
    appId: "1:776255242280:web:6b43fd888cd5685a66751d"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
