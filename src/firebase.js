import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB7BBnZqsYhyzkxH0YOod-j7w3nVNz8sLg",
    authDomain: "medical-231cb.firebaseapp.com",
    projectId: "medical-231cb",
    storageBucket: "medical-231cb.appspot.com",
    messagingSenderId: "409573091146",
    appId: "1:409573091146:web:b3c671aa217229eefe83b3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export{firebase}




  
