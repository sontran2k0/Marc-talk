// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import { firebase } from '@firebase/app'

// Add the Firebase services that you want to use
import '@firebase/auth'
import '@firebase/firestore'
import '@firebase/storage'
var firebaseConfig = {
  apiKey: "AIzaSyDgOXSKzZ0WW9XDZgjATNPeugsGZdD585E",
  authDomain: "the-game-box-tgb.firebaseapp.com",
  databaseURL: "https://the-game-box-tgb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "the-game-box-tgb",
  storageBucket: "the-game-box-tgb.appspot.com",
  messagingSenderId: "1005288724361",
  appId: "1:1005288724361:web:b871065ec6434ce2e9b358",
  measurementId: "G-D42HMRN415"
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebaseApp.auth()
const firebaseDb = firebaseApp.firestore()
firebase.firestore().enablePersistence()
  .catch(function (err) {
    if (err.code === 'failed-precondition') {
      console.log('precondition failed')
    } else if (err.code === 'unimplemented') {
    }
  })

export { firebaseAuth, firebaseDb, firebaseApp, firebase }
