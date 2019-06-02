import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBcHd7OroUBMoKnsupN2P4Gh9kzz3jh7-Y",
    authDomain: "gomarket-c6d82.firebaseapp.com",
    databaseURL: "https://gomarket-c6d82.firebaseio.com",
    projectId: "gomarket-c6d82",
    storageBucket: "gomarket-c6d82.appspot.com",
    messagingSenderId: "379382457763",
    appId: "1:379382457763:web:2f8084ec67ae0de4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default 
  }