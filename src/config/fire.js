import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBkPhQCj1KYxWAZ6bGzMffY1YVkZrt7oC8",
    authDomain: "first-app-fb85b.firebaseapp.com",
    databaseURL: "https://first-app-fb85b.firebaseio.com",
    projectId: "first-app-fb85b",
    storageBucket: "first-app-fb85b.appspot.com",
    messagingSenderId: "200172931106",
    appId: "1:200172931106:web:6a69dc166589a6c70be27b"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;


