import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
    apiKey: "AIzaSyD8xFcWth8A05AD9i18lOJakSkqF47_BGs",
    authDomain: "browser-based-code-editor.firebaseapp.com",
    projectId: "browser-based-code-editor",
    storageBucket: "browser-based-code-editor.appspot.com",
    messagingSenderId: "353891879678",
    appId: "1:353891879678:web:64d452cf8e64684548b3af",
    measurementId: "G-J9ZT6H5CFK"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
