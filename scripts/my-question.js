import { head } from "../components/head.js";
let header = document.getElementById("header");
header.innerHTML = head();

import { navbar } from "../components/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();
 
document.getElementById("submit_btn").addEventListener("click", Myfun);
function Myfun(){
    let msg = document.getElementById("msg");

    msg.innerText = "Thank you! Your questionnaire has been submited";
    msg.style.color = "green";
    msg.style.fontSize = "16px";
}