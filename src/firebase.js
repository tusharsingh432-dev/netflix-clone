import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAqiUn8Cq80yZSScFng9NHa7kQH201AeBQ",
    authDomain: "netflix-clone-mt.firebaseapp.com",
    projectId: "netflix-clone-mt",
    storageBucket: "netflix-clone-mt.appspot.com",
    messagingSenderId: "327487477324",
    appId: "1:327487477324:web:06088fe2f5b9adb3aa06e9",
    measurementId: "G-PZ64ZTCGE7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;