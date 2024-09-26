
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  import { getDatabase, ref, set ,onValue } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyANrzEtiTBG7SYnQJvG0-K39BVr5zMa1Tw",
    authDomain: "december-class.firebaseapp.com",
    databaseURL: "https://december-class-default-rtdb.firebaseio.com",
    projectId: "december-class",
    storageBucket: "december-class.appspot.com",
    messagingSenderId: "345903235353",
    appId: "1:345903235353:web:90c6f352bf6c28aeb44588"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const database = getDatabase();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
        window.location.href = "login.html"
        
    }
  });

  const userref = ref(database, "allusers")
  onValue(userref, (snapshot)=>{
    let users = snapshot.val()
    console.log(users);
  })
  
