import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDIVo8l6_QX9qC31Q46t4k28hYnSWLeV14",
    authDomain: "nextfire-ec1c0.firebaseapp.com",
    projectId: "nextfire-ec1c0",
    storageBucket: "nextfire-ec1c0.appspot.com",
    messagingSenderId: "590519144146",
    appId: "1:590519144146:web:f96bb366c7a6b644bce70b",
    measurementId: "G-5SXX1N7ZT6"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();