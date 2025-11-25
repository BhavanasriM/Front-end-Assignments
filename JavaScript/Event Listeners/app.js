//Event listeners
// test = () => {
//   console.log("working..");
// }; // evertime should target when create another button, and we didnt know more info about this event

// So Evenetlisteners used
//addEventListener

// let btn = document.getElementById("btn");

// test = (event) => {
//   console.log(event);
// };
// btn.addEventListener("click", test);
//or
// btn.addEventListener("click", (event) => {
//   console.log(event.target.innerText + "was clicked");
// });

// let btns = document.querySelectorAll("button");
// // console.log(btns);
// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     let btn = e.target;
//     console.log(btn.innerText + "clicked");
//     btn.innerText = "clicked";
//     btn.setAttribute("disabled", true);
//   });
// });

//on mouse in
//on mouse out
//onchange
//onkeyup
//onkeyDown
//scroll
//load

// let alert = document.querySelector(".alert");

// let demo = document.querySelector(".demo");
// demo.addEventListener("mouseover", () => {
//   // console.log("cursor is inside demo box");
//   alert.innerText = "cursor is inside demo box";
// });

// demo.addEventListener("mouseout", () => {
//   // console.log("cursor is outside demo box");
//   alert.innerText = "cursor is outside demo box";
// });

//ONCHANGE

// let inputs = document.querySelectorAll("input");
// loader.classList.add("page-laoder");
// inputs.forEach((input) => {
//   input.addEventListener("change", () => {
//     console.log(input.value);
//   });
// });

//ONKEYUP AND ONKEYDOWN
// let input = document.querySelector("input");
// input.addEventListener("keyup", () => {
//   console.log(input.value);
// });

//load

// let loader = document.querySelector("#loader");
// loader.classList.remove("hidden");
// loader.classList.add("page-loader");
// window.addEventListener("load", () => {
//   loader.classList.remove("page-loader");
//   loader.classList.add("hidden");
// });

//scroll
// let btn = document.querySelector(".help");
// window.addEventListener("scroll", () => {
//   // console.log("page is scrolled");
//   if (window.scrollY > 500) {
//     btn.classList.add("show");
//     console.log("afvh");
//   } else {
//     btn.classList.remove("show");
//   }
// });

let btn = document.querySelector(".help");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
});
