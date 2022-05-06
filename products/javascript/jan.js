document.getElementById("cart").addEventListener("mouseover", change)
document.getElementById("cart").addEventListener("mouseout", mouseout)
document.getElementById("desc").addEventListener("click", desc)
document.getElementById("plans").addEventListener("click", plans)
document.getElementById("policy").addEventListener("click", policy)
document.getElementById("reviews").addEventListener("click", reviews)

let btnDetail =  document.getElementById("btnDetail")


function desc(){
   
    btnDetail.innerHTML = null;

    document.getElementById('welcomeDiv').style.display = "none";
    document.getElementById('showform').style.display = "none"

    let btn1 =  document.getElementById("desc")
    btn1.style.backgroundColor = "#ebc06b"

    let btn2 =  document.getElementById("plans")
    btn2.style.backgroundColor = "white"

    let btn3 =  document.getElementById("policy")
    btn3.style.backgroundColor = "white"

    let btn4 =  document.getElementById("reviews")
    btn4.style.backgroundColor = "white"

    let p1 = document.createElement("p")
    p1.innerText = "New Year calls for All New Beauty! Discover 4 makeup & skincare essentials this month from your favorite brands in the Beauty Re-Solution January Fab Bag.."

    let p2 = document.createElement("p")
    p2.innerText = "Here's what you can expect inside your January Fab Bag:"

    let p3 = document.createElement("p")
    p3.innerText = "*Two offers cannot be clubbed. Makeup choice will be available on the order confirmation page, on a first-come, first-served basis. Bonus product will be customized by the Fab Bag Crew."

    let p4 = document.createElement("p")
    p4.innerText = "*FAB BAG delivers the best of beauty and makeup products once a month, customized just for you."

    let ul = document.createElement("ul")

    let li1 = document.createElement("li")
    li1.innerText = "SUGAR Wonder Woman 24 HR Lip Lacquer of your choice!*"

   let  li2 = document.createElement("li")
    li2.innerText = "Coco Soul Hair and Scalp Cleanser/Shampoo"

    let li3 = document.createElement("li")
    li3.innerText = "Palmer's Hair Style Hold"

    let li4 = document.createElement("li")
    li4.innerText = "Baiser India Nourishing Lip Oil "

    // li5 = document.createElement("li")
    // li5.innerText = "ODEON Turmeric & Yogurt Face and Body Scrub *"
   
    ul.append(li1, li2, li3, li4)

    btnDetail.append(p1, p2, ul, p3, p4)


}



function plans(){

    btnDetail.innerHTML = null;

    document.getElementById('showform').style.display = "none"

    let btn1 =  document.getElementById("desc")
    btn1.style.backgroundColor = "white"

    let btn2 =  document.getElementById("plans")
    btn2.style.backgroundColor = "#ebc06b"

    let btn3 =  document.getElementById("policy")
    btn3.style.backgroundColor = "white"

    let btn4 =  document.getElementById("reviews")
    btn4.style.backgroundColor = "white"

    document.getElementById('welcomeDiv').style.display = "block";



}

function policy(){
    btnDetail.innerHTML = null;

    document.getElementById('welcomeDiv').style.display = "none";

    document.getElementById('showform').style.display = "none"

    let btn1 =  document.getElementById("desc")
    btn1.style.backgroundColor = "white"

    let btn2 =  document.getElementById("plans")
    btn2.style.backgroundColor = "white"

    let btn3 =  document.getElementById("policy")
    btn3.style.backgroundColor = "#ebc06b"

    let btn4 =  document.getElementById("reviews")
    btn4.style.backgroundColor = "white"


    let div =  document.createElement("div")
    div.id = "policyDiv"
  
    let ul = document.createElement("ul")

    let li1 = document.createElement("li")
    li1.innerText = "Returns Policy for FAB BAG Monthly Subscriptions: 100% Happiness or Money-Back Guarantee"

    let li2 = document.createElement("li")
    li2.innerText = "For more details, please see our Policy here."

    let li3 = document.createElement("li")
    li3.innerText = "Should you have any questions regarding this product, please feel free to get in touch with our friendly Customer Experience Team at crew@fabbag.com within 48 hours of receiving the shipment or call us at 022-4896-7878 Mon - Fri, 9am - 7pm."

    ul.append(li1, li2, li3)
    div.append(ul)

    btnDetail.append(div)
    
}


function reviews(){

    btnDetail.innerHTML = null;

    document.getElementById('welcomeDiv').style.display = "none";

    let btn1 =  document.getElementById("desc")
    btn1.style.backgroundColor = "white"

    let btn2 =  document.getElementById("plans")
    btn2.style.backgroundColor = "white"

    let btn3 =  document.getElementById("policy")
    btn3.style.backgroundColor = "white"

    let btn4 =  document.getElementById("reviews")
    btn4.style.backgroundColor = "#ebc06b"

    let h3 =  document.createElement("h3")
    h3.innerText =  "Customer Reviews"

    let div =  document.createElement("div")
    div.id = "custReviews"

    let p1 = document.createElement("p")
    p1.innerText = "No reviews yet"
   
    let btn = document.createElement("button")
    btn.innerText = "write a review"
    btn.onclick =  function writeReview()
    {
      let e = document.getElementById('showform')
    

        if(e.style.display == 'block')
        e.style.display = 'none';
       else
        e.style.display = 'block';
       

        // document.getElementById('showform').style.display = "block";
    }
    btn.style.color = "#ebc06b"
    

    div.append(p1, btn)

    btnDetail.append(h3, div)



}





function month1(){
 
    let price = document.getElementById("price")
    price.innerText = "Rs. 599.00"

    let btn =  document.getElementById("month1")
    // btn.id = "click1" 
    btn.style.color = "black" 

    let btn2 =  document.getElementById("month3") 
    // btn2.id = "month3"
    btn2.style.color = "grey"

    clicked3  =  false
    clicked1  =  true

    console.log(clicked3, "clicked3")
    console.log(clicked1 , "clicked1")
   


}

let clicked3  =  false
let clicked1  =  false

function month3(){
 
 let price = document.getElementById("price")
    price.innerText = "Rs. 1,599.00"

    let btn =  document.getElementById("month3")
    // btn.id = "click3"
    btn.style.color = "black" 

    let btn2 =  document.getElementById("month1") 
    // btn2.id = "month1"
    btn2.style.color = "grey"

    clicked3  =  true
    clicked1  =  false

    console.log(clicked3, "clicked3")
    console.log(clicked1, "clicked1")
    

}




// function showDiv() {
     
//     btnDetail.innerHTML = null;
//     document.getElementById('btnDetail').style.display = "block";
//  }

function change(){
 
    let cart = document.getElementById("cart")
    cart.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>`

  cart.style.backgroundColor = "#ebc06b"


}

function mouseout(){
 
    let cart = document.getElementById("cart")
    cart.innerText = "ADD TO CART"
    cart.style.backgroundColor = "black"


}



var counter;

if (localStorage.getItem("counterNumber") == null) {
  counter = 1;
} else {
  counter = localStorage.getItem("counterNumber");
}

document.querySelector("#qty").innerText = counter;
document.querySelector("#dec").addEventListener("click", decFun);

function decFun() {
  counter--;
  localStorage.setItem("counterNumber", counter);
  document.querySelector("#qty").innerText = counter;
}

document.querySelector("#inc").addEventListener("click", incFun);

function incFun() {
  counter++;
  localStorage.setItem("counterNumber", counter);
  document.querySelector("#qty").innerText = counter;
}



    


// Image hovering effect



  // most efficient way to add HTML, faster than innerHTML
const parseHTML = htmlStr => {
  const range = document.createRange()
  range.selectNode(document.body) // required in Safari
  return range.createContextualFragment(htmlStr)
}

// pass this function any image element to add magnifying functionality
const makeImgMagnifiable = img => {
  const magnifierFragment = parseHTML(`
    <div class="magnifier-container">
      <div class="magnifier">
        <img class="magnifier__img" src="${img.src}"/>
      </div>
    </div>
  `)
  
  // This preserves the original element reference instead of cloning it.
  img.parentElement.insertBefore(magnifierFragment, img)
  const magnifierContainerEl = document.querySelector('.magnifier-container')
  img.remove()
  magnifierContainerEl.appendChild(img)
  
  // query the DOM for the newly added elements
  const magnifierEl = magnifierContainerEl.querySelector('.magnifier')
  const magnifierImg = magnifierEl.querySelector('.magnifier__img')
  
  // set up the transform object to be mutated as mouse events occur
  const transform = {
    translate: [0, 0],
    scale: 1,
  }
  
  // shortcut function to set the transform css property
  const setTransformStyle = (el, {translate, scale}) => {
    const [xPercent, yRawPercent] = translate
    const yPercent = yRawPercent < 0 ? 0 : yRawPercent
    
    // make manual pixel adjustments to better center
    // the magnified area over the cursor.
    const [xOffset, yOffset] = [
      `calc(-${xPercent}% + 250px)`,
      `calc(-${yPercent}% + 70px)`,
    ]

    el.style = `
      transform: scale(${scale}) translate(${xOffset}, ${yOffset});
    `
  }
  
  // show magnified thumbnail on hover
  img.addEventListener('mousemove', event => {
    const [mouseX, mouseY] = [event.pageX + 40, event.pageY - 20]
    const {top, left, bottom, right} = img.getBoundingClientRect()
    transform.translate = [
      ((mouseX - left) / right) * 100,
      ((mouseY - top) / bottom) * 100,
    ]
    magnifierEl.style = `
      display: block;
      top: ${mouseY}px;
      left: ${mouseX}px;
    `
    setTransformStyle(magnifierImg, transform)
  })
  
  // zoom in/out with mouse wheel
  img.addEventListener('wheel', event => {
    event.preventDefault()
    const scrollingUp = event.deltaY < 0
    const {scale} = transform
    transform.scale = scrollingUp && scale < 3
      ? scale + 0.1
      : !scrollingUp && scale > 1
      ? scale - 0.1
      : scale
    setTransformStyle(magnifierImg, transform)
  })
  
  // reset after mouse leaves
  img.addEventListener('mouseleave', () => {
    magnifierEl.style = ''
    magnifierImg.style = ''
  })
  
  
}

const img = document.querySelector('.image-preview-js')
makeImgMagnifiable(img)

  