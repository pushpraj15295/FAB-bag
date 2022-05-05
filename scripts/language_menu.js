let login_div = document.getElementById("lang_menu");
//import lang_div from "../components/language_div.js";


document.getElementById("user").addEventListener("mouseenter", showFunction);
 function showFunction(){
    login_div.innerHTML = `
    <div id="lang1">
        <div id="language"><span>Languages: &nbsp;&nbsp;&nbsp;<span style="color: #e8bb5f;">En</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>Fr</span></span></div>
        <div><span><a href="./checkout.html">Checkout</a></span></div>
        <div><span><a href="./login.html">Sing In</span></a></div>
        <div><span><a href="./create_ac.html">Create an account</a></span></div>
    </div>
    `
    login_div.style.transition = "all 0.10s ease";
    login_div.style.transitionDuration =  "0.10s";
}
document.getElementById("lang_menu").addEventListener("mouseleave", hideFunction);
function hideFunction(){
    login_div.innerHTML = "";
}
document.getElementById("cross").addEventListener("click", hidehFunction);
function hidehFunction(){
    document.getElementById("header").innerHTML = "";
}