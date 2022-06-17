

  import firebase from 'firebase';

  const firebaseConfig = {
  apiKey: "AIzaSyCQ40Fh8IQz3H-f4eaS1RhYaUwElC46nJ4",
  authDomain: "pro60-189b2.firebaseapp.com",
  databaseURL: "https://pro60-189b2-default-rtdb.firebaseio.com",
  projectId: "pro60-189b2",
  storageBucket: "pro60-189b2.appspot.com",
  messagingSenderId: "227986936880",
  appId: "1:227986936880:web:30581ba0fb066c64ba49f5",
  measurementId: "G-0C7WTJP5DZ"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();
 

  