

var cartdata = JSON.parse(localStorage.getItem("cart"));
var cartData = JSON.parse(localStorage.getItem("cart")) || [];

var counter;
if (localStorage.getItem("counter" == null)) {
  counter = 1;
} else if (cartdata == []) {
  counter = 1;
} else {
  counter = localStorage.getItem("counter");
}
function decFunction(el) {
  if (counter > 1) {
    counter--;
    document.querySelector("#count").innerText = counter;
    localStorage.setItem("counter", counter);
    window.location.reload();
  }
}
function incFunction(el) {
  counter++;
  document.querySelector("#count").innerText = counter;
  localStorage.setItem("counter", counter);
  window.location.reload();

}
var total = cartData.reduce(function(sum, el){
  return sum + el.price * counter;
}, 0);

localStorage.setItem("total", JSON.stringify(total));
cartData.map(function (el, ind) {
  var product_details = document.createElement("div");
  product_details.setAttribute("class", "product_details");

  var box1 = document.createElement("div");
  box1.setAttribute("class", "box1");

  var pr_img = document.createElement("img");
  pr_img.src = el.image_url;
  pr_img.setAttribute("class", "small_img");

  var box2 = document.createElement("div");
  box2.setAttribute("class", "box2");

  var name = document.createElement("p");
  name.innerText = el.title;
  name.setAttribute("class", "name");

  //  var quantity = document.createElement("p");
  //  quantity.innerText="Quantity :";

  var price = document.createElement("p");
  price.innerText = `Rs. ${el.price}`;
  price.setAttribute("class", "price");

  var qnt_rem_line_box = document.createElement("div");
  qnt_rem_line_box.setAttribute("class", "qnt_rem_line_box");

  var qnt_box = document.createElement("div");
  qnt_box.setAttribute("id", "qnt_box");

  //quantity------>
  var qnt_box1 = document.createElement("button");
  qnt_box1.setAttribute("class", "qnt");
  qnt_box1.innerText = "-";
  qnt_box1.addEventListener("click", function () {
    decFunction(el, ind);
  });
  var qnt_box2 = document.createElement("div");
  qnt_box2.innerText = counter;
  qnt_box2.setAttribute("id", "count");
  var qnt_box3 = document.createElement("button");
  qnt_box3.setAttribute("class", "qnt");
  qnt_box3.innerText = "+";
  qnt_box3.addEventListener("click", function () {
    incFunction(el, ind);
  });
  //remove----->
  var remove = document.createElement("div");
  remove.innerText = "X ";
  remove.setAttribute("id", "remove");
  remove.addEventListener("click", function () {
    removeFunction(el, ind);
  });

  qnt_box.append(qnt_box1, qnt_box2, qnt_box3);
  qnt_rem_line_box.append(qnt_box, remove);
  box1.append(pr_img);
  box2.append(name, qnt_rem_line_box, price);
  product_details.append(box1, box2);
  document.querySelector("#leftbottom").append(product_details);
});

var money = document.createElement("div");
money.setAttribute("id", "money");

var price_tag = document.createElement("p");
price_tag.innerText = "Total Amount:";
var price_amount = document.createElement("span");
price_amount.innerText = `Rs. ${total}`;
price_amount.setAttribute("id", "price_amount");

var payment_div = document.createElement("div");
payment_div.setAttribute("id", "payment_div");
payment_div.innerText = " CHECKOUT";
payment_div.addEventListener("click", function () {
  processNextFunction();
});
var update_div = document.createElement("div");
update_div.setAttribute("id", "update_div");
update_div.innerText = " UPDATE CART";
update_div.addEventListener("click", function () {
  processupdateFunction();
});
money.append(price_tag, price_amount);
document.querySelector("#rightcont").append(money, update_div, payment_div);

function removeFunction(el, ind) {
  cartData.splice(ind, 1);
  console.log(cartData);
  localStorage.setItem("cart", JSON.stringify(cartData));
  window.location.reload();
}
var total_amount=JSON.parse(localStorage.getItem("total"))||[]
function processupdateFunction() {
    localStorage.setItem("total",JSON.stringify(total_amount))
  window.location.reload();
}
function processNextFunction() {
  window.location.href = "../checkout.html";
}

