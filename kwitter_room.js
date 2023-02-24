// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy371pt1UCfyMph2Kz9Xo16dbs8fCL86k",
  authDomain: "kwitter-33cc1.firebaseapp.com",
  projectId: "kwitter-33cc1",
  storageBucket: "kwitter-33cc1.appspot.com",
  messagingSenderId: "1096573264777",
  appId: "1:1096573264777:web:62aba788124f9bd5c57758"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")

document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value
    
  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionar sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}