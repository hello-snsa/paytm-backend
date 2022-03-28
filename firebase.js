const firebase = require('firebase')


var firebaseConfig = {
  apiKey: "AIzaSyDQMDnlrEI95yLpCdfKj_uOfRjcEk9BZ2I",
  authDomain: "paytm-status-452f5.firebaseapp.com",
  projectId: "paytm-status-452f5",
  storageBucket: "paytm-status-452f5.appspot.com",
  messagingSenderId: "1025815467667",
  appId: "1:1025815467667:web:8298d58612e77e5c56df66",
  measurementId: "G-Z749MQD6S3"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()


module.exports = db;