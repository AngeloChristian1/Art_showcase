const firebaseConfig = {
    apiKey: "AIzaSyBxHt-uEmkv8vfDINIdzAOG5-nUZqoprv4",
    authDomain: "first-trial-robs.firebaseapp.com",
    databaseURL: "https://first-trial-robs-default-rtdb.firebaseio.com",
    projectId: "first-trial-robs",
    storageBucket: "first-trial-robs.appspot.com",
    messagingSenderId: "732138287895",
    appId: "1:732138287895:web:3625b19e14ff32f0fb3d52",
    measurementId: "G-VLMN4TSV2K"
  };

  firebase.initializeApp(firebaseConfig);

let signupForm= firebase.database().ref("Art-showcase");

document.querySelector(".form").addEventListener("submit", submitForm);

function submitForm(event){
    event.preventDefault();
}