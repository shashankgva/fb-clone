import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBOJ2jK0Ujr8ygFXM3mC4mhiiWjnRcweSg',
  authDomain: 'facebook-clone-443f4.firebaseapp.com',
  projectId: 'facebook-clone-443f4',
  storageBucket: 'facebook-clone-443f4.appspot.com',
  messagingSenderId: '971247226151',
  appId: '1:971247226151:web:49e32dc46a0461a912ad02',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
