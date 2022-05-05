 import { head } from "../components/head.js";
 let header = document.getElementById("header");
 header.innerHTML = head();
 
 import { navbar } from "../components/navbar.js";
 let nav = document.getElementById("navbar");
 nav.innerHTML = navbar();
 
 document.querySelector("form").addEventListener("submit", loginFunction);
 let regUser = JSON.parse(localStorage.getItem("userData"));

 console.log(regUser);
 function loginFunction(){
     event.preventDefault();
     let userEmail = document.querySelector("#email").value;
     let userPassword = document.querySelector("#password").value;
     let count = 0;
     for(var i=0; i<regUser.length; i++)
     {
         if(regUser[i].email == userEmail && regUser[i].password == userPassword)
         {
             count++;
         }
     }
     if(count > 0){
        alert("Login succes");
        window.location.href = "myaccount.html";
     }else{
        alert("login failed")
     }
     

 }