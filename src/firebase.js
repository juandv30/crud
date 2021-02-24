import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBZZw5BJeD2ikbqKf7g8yXzLm-PdvEHaT8",
    authDomain: "crud-6ed2f.firebaseapp.com",
    projectId: "crud-6ed2f",
    storageBucket: "crud-6ed2f.appspot.com",
    messagingSenderId: "701622258421",
    appId: "1:701622258421:web:707b454c84fd1e4ddc53bc"
}

export const firebaseapp = firebase.initializeApp(firebaseConfig)