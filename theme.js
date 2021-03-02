window.onscroll = function () {
  myFunction();
  animation();
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

function animation() {
  var frst = document.querySelector("#domi");
  var cord = frst.getBoundingClientRect();
  if (cord.top <= window.innerHeight) {
    frst.classList.add("animate__bounce");
    console.log(window.innerHeight);
    console.log(cord.top);
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
