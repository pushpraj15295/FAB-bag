import { head } from "../components/head.js";
let header = document.getElementById("header");
header.innerHTML = head();

import { navbar } from "../components/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

document.querySelector("form").addEventListener("submit", createAccountFunction);
var userArr = JSON.parse(localStorage.getItem("userData")) || [];
function createAccountFunction(){
    event.preventDefault();
    let first_name = document.querySelector("#first_name").value;
    let last_name = document.querySelector("#last_name").value;
    let email =  document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if( first_name != "" && last_name != "" && email != "" && password != "" ){
        var userObj = {
            first_name : first_name,
            last_name : last_name,
            email : email,
            password : password,
        }
        userArr.push(userObj);
        console.log(userArr);
        localStorage.setItem("userData", JSON.stringify(userArr));
        window.location.href = "checkout.html";
    }else{
        alert("Please fill all the fields")
    }
}