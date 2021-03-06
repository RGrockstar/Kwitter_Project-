var firebaseConfig = {
    apiKey: "AIzaSyDUpCKBvPmqL75JkuqiESI5LEEe-NXGiiI",
    authDomain: "greetingbot-mbbf.firebaseapp.com",
    databaseURL: "https://greetingbot-mbbf-default-rtdb.firebaseio.com",
    projectId: "greetingbot-mbbf",
    storageBucket: "greetingbot-mbbf.appspot.com",
    messagingSenderId: "612205345152",
    appId: "1:612205345152:web:7cc8fdb50be16fb3c3e965",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");  
room_name=localStorage.getItem("room_name");

function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}