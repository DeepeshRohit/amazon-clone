import firebase from "firebase";

const firebaseApp =firebase.initializeApp({ 
        apiKey: "AIzaSyAN6-x0D9MO4sM5ACg6kA1mG78tCJy1ID0",
        authDomain: "clone-a1594.firebaseapp.com",
        databaseURL: "https://clone-a1594.firebaseio.com",
        projectId: "clone-a1594",
        storageBucket: "clone-a1594.appspot.com",
        messagingSenderId: "843174061638",
        appId: "1:843174061638:web:444cf07ea8fc705f340c47",
        measurementId: "G-8M99JTM6BH"
   
}  );

 const auth = firebase.auth(); 
export {auth};
