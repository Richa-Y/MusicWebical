window.onscroll = function () {
  myFunction();
};
var cordinates = document.getElementById("test");
function myFunction() {
  if (window.pageYOffset >= 2) {
    cordinates.classList.add("animate");
  } else {
    cordinates.classList.remove("animate");
  }
}
var frst = document.querySelector("#domi");
window.addEventListener("scroll", animation);

function animation() {
  var cord = frst.getBoundingClientRect();
  if (cord.top <= window.innerHeight) {
    frst.classList.add("bounceInLeft");
    console.log(cord);
  }
}
// var second = document.querySelectorAll(".centered h1");
// window.addEventListener("scroll", anima);

// function anima() {
//   var cord2 = second.getBoundingClientRect();
//   if (cord2.top <= window.innerHeight) {
//     second.classList.add("animate__flash");
//     console.log(cord2);
//   }
// }
