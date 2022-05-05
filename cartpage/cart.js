
   var total=document.getElementById("rs");
   var tp = JSON.parse(localStorage.getItem("cart"));
   total.innerText=`Rs.${tp}.00`;
   document.getElementById("qty").value=1;
   document.getElementById("count").innerText=1;
   //=========================

   function cancel(){};


   function update(){
       let cart =document.getElementById("count");
       let qty =document.getElementById("qty").value;
       cart.innerText=qty;
       let price=tp*qty;
       total.innerText=`Rs.${price}.00`;

   }

   function gotopayment(){
       window.location="checkout.html";
   }
