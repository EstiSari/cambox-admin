import firebase from 'firebase/app'
import 'firebase/database'

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
  var fireApp = firebase.initializeApp(firebaseConfig);

  export default fireApp.database();