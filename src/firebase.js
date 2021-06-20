import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAIdAsL3h0fiQsj1LM_35-8FheauwUyZqc',
  authDomain: 'burger-builder-b51cb.firebaseapp.com',
  databaseURL: 'https://burger-builder-b51cb.firebaseio.com',
  projectId: 'burger-builder-b51cb',
  storageBucket: 'burger-builder-b51cb.appspot.com',
  messagingSenderId: '522205579815',
  appId: '1:522205579815:web:8518b2a507884179bc1c02',
  measurementId: 'G-MXRZ64ZFNY',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
