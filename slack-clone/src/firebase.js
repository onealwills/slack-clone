import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLxFVAOQVvlP2iQs_4vYFJjaOwdou8A0M",
  authDomain: "slack-clone-57ccd.firebaseapp.com",
  databaseURL: "https://slack-clone-57ccd-default-rtdb.firebaseio.com",
  projectId: "slack-clone-57ccd",
  storageBucket: "slack-clone-57ccd.appspot.com",
  messagingSenderId: "452552722915",
  appId: "1:452552722915:web:bf3e42e92a671575c2f8d6",
  measurementId: "G-T3CPN09NGD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
