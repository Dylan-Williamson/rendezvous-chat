// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB8YJ1ts6JU-4lzKpPHw9zHqvkPuaBAedA",
    authDomain: "rendezvous-chat.firebaseapp.com",
    projectId: "rendezvous-chat",
    storageBucket: "rendezvous-chat.appspot.com",
    messagingSenderId: "101651324346",
    appId: "1:101651324346:web:2724ece14bb016b56ed183",
    measurementId: "G-34T6Q7FQ7F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;