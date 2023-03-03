import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyB38uMmrIve8h7jsmdraqE4x_JdoT67ojw",
    authDomain: "ebay-clone-84f48.firebaseapp.com",
    projectId: "ebay-clone-84f48",
    storageBucket: "ebay-clone-84f48.appspot.com",
    messagingSenderId: "730829788431",
    appId: "1:730829788431:web:73d6960695ad63a6b6da7a",
    measurementId: "G-JJYTNM0W6B"
};
const server = firebase.initializeApp(firebaseConfig);
const auth = server.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export { auth, provider } 