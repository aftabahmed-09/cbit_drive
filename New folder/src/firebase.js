import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDPdwSzT-moYUpyTfI_F1W-6L0hbkxVASg",
  authDomain: "drive-ef9d7.firebaseapp.com",
  databaseURL: "https://drive-ef9d7-default-rtdb.firebaseio.com",
  projectId: "drive-ef9d7",
  storageBucket: "drive-ef9d7.appspot.com",
  messagingSenderId: "1025590271311",
  appId: "1:1025590271311:web:de7a9d36356b8cbca1793a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }