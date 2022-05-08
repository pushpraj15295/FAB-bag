// import { head } from "../components/head.js";
// let header = document.getElementById("header");
// header.innerHTML = head();

// import { navbar } from "../components/navbar.js";
// let nav = document.getElementById("navbar");
// nav.innerHTML = navbar();
  
  
  
  
  
  
  // side show 1 starts
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }

// slide show 1 ends 
// Testinomial slide show

  let slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
let i;
let slides4 = document.getElementsByClassName("mySlides4");
let dots4 = document.getElementsByClassName("dot4");
if (n > slides4.length) {slideIndex4 = 1}    
if (n < 1) {slideIndex4 = slides4.length}
for (i = 0; i < slides4.length; i++) {
  slides4[i].style.display = "none";  
}
for (i = 0; i < dots4.length; i++) {
  dots4[i].className = dots4[i].className.replace(" active4", "");
}
slides4[slideIndex4-1].style.display = "block";  
dots4[slideIndex4-1].className += " active4";
}
// Testinomial slide show
// slide show 4 starts



// subscription add to cart page

let tableCart1 = false;
  let tableCart3 =  true


  function  table1(){

tableCart1= true;
tableCart3  =  false;

if(tableCart1 == true)
{
let finalCart =  []

var cartData = 
  {
    image_url: "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Bag-Reveal.gif?v=1651343709",
    title: "The AweSummer May Fab Bag 1 Month",
    qty: 1,
    price: "Rs. 599.00",
  //   document.getElementById("qty").innerText
  }

  finalCart.push(cartData)


localStorage.setItem("cart", JSON.stringify(finalCart))  

}


  }

  function table3(){


tableCart1 = false;
tableCart3  =  true;
let finalCart =  JSON.parse(localStorage.getItem("cart"))|| []

    var cartData = 
        {
          image_url: "https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Bag-Reveal.gif?v=1651343709",
          title: "The AweSummer May Fab Bag 3 Month",
          qty: 1,
          price: "Rs. 1,599.00",
        //   document.getElementById("qty").innerText
        }

         finalCart.push(cartData)

localStorage.setItem("cart", JSON.stringify(finalCart))  

}
// subscription add to cart page
