import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCYmU-SnsQxAGOpnFFhcR5khqHbo3XH_FI",
    authDomain: "whatsappclone-ba70f.firebaseapp.com",
    projectId: "whatsappclone-ba70f",
    storageBucket: "whatsappclone-ba70f.appspot.com",
    messagingSenderId: "504204411802",
    appId: "1:504204411802:web:7e96ba30cd343b3d0d7023",
    measurementId: "G-HHC2HRPXGP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  const ts = firebase.firestore.FieldValue.serverTimestamp;


  
  export {auth,provider,storage, ts};
  export default db;