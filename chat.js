// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAIEcIObuNmnuIEUqbcQpagTjkYSgCtijA",
    authDomain: "kwitter-f0a66.firebaseapp.com",
    projectId: "kwitter-f0a66",
    storageBucket: "kwitter-f0a66.appspot.com",
    messagingSenderId: "793957984598",
    appId: "1:793957984598:web:c2e5393be35444b7848ef7",
    measurementId: "G-TT49X2PT2Q"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);
    
    window.location = "chat_room.html";
    */
   localStorage.setItem("user_name, user_name");
   window.location = "chat_room.html";
}



