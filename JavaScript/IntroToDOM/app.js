function unlocked() {
  let title = document.getElementById("heading");
  let btn = document.getElementById("btn");
  title.innerText = "Congratulation! now you can start learning DOM!";
  btn.style.display = "none";
}
console.log(typeof btn);

function welcome() {
  // let studentName = document.getElementById("name").value;
  // console.log(studentName);
  let studentName = document.getElementById("name");
  let nameSpan = document.getElementById("nameSpan");
  nameSpan.innerText = studentName.value;
  studentName.value = "";
}

function split() {
  let amount = document.getElementById("amount");
  let persons = document.getElementById("persons");
  let result = (amount.value / persons.value).toFixed(2); //to fixed decimals afer point
  let resultdiv = document.getElementById("result");
  resultdiv.innerText = result;
}

let counter = 0;
let counterResult = document.getElementById("counterResult");
function increment() {
  counter = counter + 1;
  counterResult.innerText = counter;
}
function decrement() {
  if (counter > 0) {
    counter = counter - 1;
    counterResult.innerText = counter;
  }
}

let demo = document.getElementById("demo");
// demo.innerText = '<h1 class="font-black text-2xl">Hello</h1>';
demo.innerHTML = '<h1 class="font-black text-2xl">Hello</h1>';
