
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyARQaNF3ZNhtc0r8z7sH8PTrRd8Mzh9HDE",
      authDomain: "kwitter-18ffc.firebaseapp.com",
      databaseURL: "https://kwitter-18ffc-default-rtdb.firebaseio.com",
      projectId: "kwitter-18ffc",
      storageBucket: "kwitter-18ffc.appspot.com",
      messagingSenderId: "462770863687",
      appId: "1:462770863687:web:8ec9035b0cbb2aa8f07b62"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
