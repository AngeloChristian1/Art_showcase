const firebaseConfig = {
  apiKey: "AIzaSyDfKzch08LVO_GOvKZBmHkpsenDeqsxP7o",
  authDomain: "arts-showcase-1.firebaseapp.com",
  databaseURL: "https://arts-showcase-1-default-rtdb.firebaseio.com",
  projectId: "arts-showcase-1",
  storageBucket: "arts-showcase-1.appspot.com",
  messagingSenderId: "991393571028",
  appId: "1:991393571028:web:0904bd98d43bc3ed5adb41",
  measurementId: "G-B56ZVNL7MX"
};

  firebase.initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const db = firebase.firestore();

// Use Firestore
const usersRef = db.collection("signups");
usersRef.get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}).catch((error) => {
  console.error(error);
});  

  // let artSign= firebase.database().ref("signupArtists");
document.querySelector(".form1").addEventListener("submit", submitForm);

function submitForm(event){
event.preventDefault();

let fname= getElementval("Fname");
let sname= getElementval("Sname");
let username= getElementval("username");
let email= getElementval("email");
let phone= getElementval("Pnumber");
let arts= getElementval("category");
let password= getElementval("password");
let cpassword= getElementval("cpassword");

console.log(fname, sname, username, email, phone, arts, password, cpassword);

saveMsg(fname,sname,username,email,phone,arts,password,cpassword)
}


const saveMsg= (fname,sname,username,email,phone,arts,password,cpassword) =>{
  let newartSign= usersRef.push();

  newartSign.set({
    fname: fname,
    sname: sname,
    username: username,
    email: email,
    phone: phone,
    arts: arts,
    password: password,
    cpassword: cpassword
  })
};


const getElementval= (id) =>{
  return document.getElementById(id).value;
}