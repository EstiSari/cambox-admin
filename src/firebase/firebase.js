import firebase from 'firebase/app'
import 'firebase/database'

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyAtQR6azLL2B1SlLcB-2Xu1I0lExxFDnnA",
    authDomain: "cambox-d0b24.firebaseapp.com",
    databaseURL: "https://cambox-d0b24.firebaseio.com",
    projectId: "cambox-d0b24",
    storageBucket: "cambox-d0b24.appspot.com",
    messagingSenderId: "680018435131",
    appId: "1:680018435131:web:b4cd4075781077ce74101e",
    measurementId: "G-GRJ85M9583"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);


export const database =  fireDb.database();
export const auth = fireDb.auth();
export const firestore = fireDb.firestore();
export const storage = fireDb.storage();

export default fireDb.database();