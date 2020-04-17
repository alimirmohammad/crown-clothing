import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBsc-i7CgUiQ1-OYeZPuM8qFaGtsdxABaA",
    authDomain: "crown-db-69064.firebaseapp.com",
    databaseURL: "https://crown-db-69064.firebaseio.com",
    projectId: "crown-db-69064",
    storageBucket: "crown-db-69064.appspot.com",
    messagingSenderId: "371772177212",
    appId: "1:371772177212:web:44489fdf3e81216b40bc39"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;