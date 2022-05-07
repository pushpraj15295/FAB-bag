let closeBtns = [...document.querySelectorAll(".close")];
      closeBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.closest(".modal");
          modal.style.display = "none";
        };
      });
// document.querySelector("#biman").addEventListener("click",fun1);
function fun1(){
    let modal = document.querySelector(".modal");
   modal.style.display = "none";
}
fun1();


let modalOne1=document.querySelector("#modalOne1");
let modalOne = document.querySelector("#modalOne");
let modalOne2 = document.querySelector("#modalOne2");
let modalOne3 = document.querySelector("#modalOne3");
let modalOne4=document.querySelector("#modalOne4");
let modalOne5 = document.querySelector("#modalOne5");
let modalOne6 = document.querySelector("#modalOne6");
let modalOne7 = document.querySelector("#modalOne7");


document.querySelector("#biman").addEventListener("click",sum);
function sum(){
    let modal = document.querySelector(".modal");
   modal.style.display = "block";
//    modalOne1.style.left= "2000px"
// let modalOne1 = document.querySelector("#modalOne1");

// modalOne1.style.display = "none";
}

function world1(){
    modalOne2.style.display="block"
    modalOne1.style.display="none"
    modalOne.style.display= "none";
    modalOne3.style.display= "none";
    modalOne4.style.display="none"
    modalOne5.style.display="none"
    modalOne6.style.display= "none";
    modalOne7.style.display= "none";


}
function world2(){
    modalOne2.style.display="none"
    modalOne1.style.display="none"
    modalOne.style.display= "block";
    modalOne3.style.display= "none";
    modalOne4.style.display="none"
    modalOne5.style.display="none"
    modalOne6.style.display= "none";
    modalOne7.style.display= "none";

}
function world3(){
    modalOne2.style.display="none"
    modalOne1.style.display="block"
    modalOne.style.display= "none";
    modalOne3.style.display= "none";
    modalOne4.style.display="none"
    modalOne5.style.display="none"
    modalOne6.style.display= "none";
    modalOne7.style.display= "none";

}
function world4(){
    modalOne2.style.display="none"
    modalOne1.style.display="none"
    modalOne.style.display= "none";
    modalOne3.style.display= "block";
    modalOne4.style.display="none"
    modalOne5.style.display="none"
    modalOne6.style.display= "none";
    modalOne7.style.display= "none";

}
function world5(){
    modalOne2.style.display="none"
    modalOne1.style.display="none"
    modalOne.style.display= "none";
    modalOne3.style.display= "none";
    modalOne4.style.display="block"
    modalOne5.style.display="none"
    modalOne6.style.display= "none";
    modalOne7.style.display= "none";

}
function world6(){
    modalOne2.style.display="none"
    modalOne1.style.display="none"
    modalOne.style.display= "none";
    modalOne3.style.display= "none";
    modalOne4.style.display="none"
    modalOne5.style.display="block"
    modalOne6.style.display= "none";
    modalOne7.style.display= "none";

}
function world7(){
    modalOne2.style.display="none"
    modalOne1.style.display="none"
    modalOne.style.display= "none";
    modalOne3.style.display= "none";
    modalOne4.style.display="none"
    modalOne5.style.display="none"
    modalOne6.style.display= "block";
    modalOne7.style.display= "none";

}
function world8(){
    modalOne2.style.display="none"
    modalOne1.style.display="none"
    modalOne.style.display= "none";
    modalOne3.style.display= "none";
    modalOne4.style.display="none"
    modalOne5.style.display="none"
    modalOne6.style.display= "none";
    modalOne7.style.display= "block";

}

function fun2(){
    let modalOne1 = document.querySelector("#modalOne1");
   modalOne1.style.display = "none";
}
fun2();
document.querySelector("#biman1").addEventListener("click",sum1);
function sum1(){
    let modalOne1 = document.querySelector("#modalOne1");
   modalOne1.style.display = "block";
  
}

// document.querySelector("#biman1").addEventListener("click",sum1);
// function sum1(){
// document.querySelector("#biman1").addEventListener("click",sum2);
// function sum2(){
//     let modalOne1 = document.querySelector("#modalOne1");
//    modalOne1.style.display = "block";
  
// }
function fun3(){
    let modalOne1 = document.querySelector("#modalOne2");
   modalOne1.style.display = "none";
}
fun3();
document.querySelector("#biman2").addEventListener("click",sum3);
function sum3(){
    let modalOne2 = document.querySelector("#modalOne2");
   modalOne2.style.display = "block";
  
}
function fun4(){
    let modalOne1 = document.querySelector("#modalOne3");
   modalOne1.style.display = "none";
}
fun4();
document.querySelector("#biman3").addEventListener("click",sum4);
function sum4(){
    let modalOne2 = document.querySelector("#modalOne3");
   modalOne2.style.display = "block";
  
}
function fun5(){
    let modalOne1 = document.querySelector("#modalOne4");
   modalOne1.style.display = "none";
}
fun5();
document.querySelector("#biman4").addEventListener("click",sum5);
function sum5(){
    let modalOne2 = document.querySelector("#modalOne4");
   modalOne2.style.display = "block";
  
}

function fun6(){
    let modalOne1 = document.querySelector("#modalOne5");
   modalOne1.style.display = "none";
}
fun6();
document.querySelector("#biman5").addEventListener("click",sum6);
function sum6(){
    let modalOne2 = document.querySelector("#modalOne5");
   modalOne2.style.display = "block";
  
}
function fun7(){
    let modalOne1 = document.querySelector("#modalOne6");
   modalOne1.style.display = "none";
}
fun7();
document.querySelector("#biman6").addEventListener("click",sum7);
function sum7(){
    let modalOne2 = document.querySelector("#modalOne6");
   modalOne2.style.display = "block";
  
}
function fun8(){
    let modalOne1 = document.querySelector("#modalOne7");
   modalOne1.style.display = "none";
}
fun8();
document.querySelector("#biman7").addEventListener("click",sum8);
function sum8(){
    let modalOne2 = document.querySelector("#modalOne7");
   modalOne2.style.display = "block";
  
}

