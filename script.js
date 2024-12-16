//your JS code here. If required.
let xW = document.querySelector(".x");
let yH = document.querySelector(".y");

window.addEventListener("resize", (e) => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  xW.innerHTML = width;
  yH.innerHTML = height;
});
