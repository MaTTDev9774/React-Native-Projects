import firebase from 'firebase'
import 'firebase/firestore'

const config = {}

export const firebaseImpl = firebase.initializeApp(config)
export const firebaseDatabase = firebase.database()
export const firebaseFirestore = firebase.firestore()
export const firebaseAuth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
