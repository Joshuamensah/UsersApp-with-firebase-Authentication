
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAGP9XXTSY5vB-BZUfL-pG7MfTFpv7kzDg",
  authDomain: "usersappwithreduxandfirestore.firebaseapp.com",
  projectId: "usersappwithreduxandfirestore",
  storageBucket: "usersappwithreduxandfirestore.appspot.com",
  messagingSenderId: "778385653246",
  appId: "1:778385653246:web:aa05e977a75c2da5eb54af",
  measurementId: "G-4P1YLX69SF"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  

  
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  //firebase.analytics();



  export default firebase;