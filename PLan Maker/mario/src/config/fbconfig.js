import firebase, { firestore } from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

export var firebaseConfig = {
    apiKey: "AIzaSyDmDJKhkYAtCNnr8GQ5myRAC4GDBo7HluM",
    authDomain: "ad-planner-45436.firebaseapp.com",
    databaseURL: "https://ad-planner-45436.firebaseio.com",
    projectId: "ad-planner-45436",
    storageBucket: "ad-planner-45436.appspot.com",
    messagingSenderId: "741250255755",
    appId: "1:741250255755:web:83450f36f4c0f74d3dfd8e",
    measurementId: "G-GWEZ73BWXD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase