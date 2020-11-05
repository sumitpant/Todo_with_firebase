// For Firebase JS SDK v7.20.0 and later, measurementId is optional


  import firebase from "firebase";

  const firebaseApp=firebase.initializeApp({

    apiKey: "AIzaSyDAh5P7bwwqD-9CbLtU_0h14J7XLu1QE_Q",
    authDomain: "todo-app-react-95130.firebaseapp.com",
    databaseURL: "https://todo-app-react-95130.firebaseio.com",
    projectId: "todo-app-react-95130",
    storageBucket: "todo-app-react-95130.appspot.com",
    messagingSenderId: "670096958572",
    appId: "1:670096958572:web:625031cda500f88cc5a449",
    measurementId: "G-84RJCEHXDT"

  })

  const db =firebaseApp.firestore();
  

  export default db;