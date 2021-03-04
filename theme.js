window.onscroll = function () {
  myFunction();
  // animation();
};
// var cordinates = document.getElementById("test");

function myFunction() {
  var cordinates = document.getElementById("test");
  if (window.pageYOffset >= 2) {
    cordinates.classList.add("animate");
  } else {
    cordinates.classList.remove("animate");
  }
}
// var frst = document.querySelector("#domi");
// window.addEventListener("scroll", animation);

// function animation() {
//   var frst = document.querySelector("#domi");
//   var cord = frst.getBoundingClientRect();
//   if (cord.top <= window.innerHeight) {
//     frst.classList.add("animate__bounce");
//     console.log(window.innerHeight);
//     console.log(cord.top);
//   }
// }
// var second = document.querySelectorAll(".centered h1");
// window.addEventListener("scroll", anima);

// function anima() {
//   var cord2 = second.getBoundingClientRect();
//   if (cord2.top <= window.innerHeight) {
//     second.classList.add("animate__flash");
//     console.log(cord2);
//   }
// }

function Say() {
  var change = document.querySelector(".rombo2");
  // var count = 0;
  var interval = setTimeout(function () {
    change.innerHTML = "Fun Fun !!!!";
    change.style.color = "red";
  }, 500);
}
function SayH() {
  var change2 = document.querySelector(".rombo3");

  change2.innerHTML = "have a nice day!!!!";
  change2.style.color = "red";
}
function sun() {
  var x = document.querySelectorAll(".frm1");
  var display = document.querySelector(".display");
  var text = "";
  for (var i = 0; i < x.length; i++) {
    text += x[i].value + " " + "<br>";
  }
  alert("Check your details again before submitting .");
  display.innerHTML += text;
}
// var btn = document.querySelectorAll(".rock-btn");
// for (var i = 0; i < btn.length; i++) {
//   if (btn[i].addEventListener("mousemove")) {
//     btn[i].addEventListener("mousemove", function () {
//       this.innerText = "Thank You";
//     });
//   } else {
//     this.innerText = "Music is life";
//   }
// }
var hp = document.querySelector(".heavy");
hp.addEventListener("click", function () {
  hp.innerHTML = "Thank You ";
  hp.style.backgroundColor = "yellow";
});
