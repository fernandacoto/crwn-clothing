import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAlSwucfoeavTpevDBduImmI1rlrMq6Xq4",
  authDomain: "crwn-clothing-db-7d5c1.firebaseapp.com",
  projectId: "crwn-clothing-db-7d5c1",
  storageBucket: "crwn-clothing-db-7d5c1.appspot.com",
  messagingSenderId: "718097047846",
  appId: "1:718097047846:web:ac899439c6afe172fe61e7",
  measurementId: "G-JCFV1N33VV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;