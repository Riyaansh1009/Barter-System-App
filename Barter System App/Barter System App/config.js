import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCOONhbP6oTZmPhSCz58YQjBZwrrb7g08o",
  authDomain: "barter-system-project.firebaseapp.com",
  projectId: "barter-system-project",
  storageBucket: "barter-system-project.appspot.com",
  messagingSenderId: "501021200484",
  appId: "1:501021200484:web:451c28233ef806f2aa8f71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  export default firebase.firestore();
