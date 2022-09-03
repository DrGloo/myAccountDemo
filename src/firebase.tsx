import firebase from 'firebase/app
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: process.env.firstKey,
  authDomain: process.env.secondKey,
  projectId: process.env.thirdKey,
  storageBucket: process.env.fourthKey,
  messagingSenderId: process.env.fifthKey,
  appId: process.env.sixthKey,
})