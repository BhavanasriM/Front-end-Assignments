rev = () => {
  let title = document.getElementById("title");
  // let btn = document.getElementById("btn");
  title.innerText = "You are good to move to advance concepts!";
  document.getElementById("btn").style.backgroundColor = "blueViolet";
  btn.style.borderRadius = "40px";
};

function roll() {
  let dice = document.getElementById("dice");
  let random = Math.floor(Math.random() * 6) + 1;
  let audio = document.getElementById("diceAudio");
  audio.play();
  dice.classList.add("spin");
  // dice.classList.remove("spin");
  setTimeout(function () {
    dice.classList.remove("spin");
    dice.innerText = random;
  }, 1000);
}
//setTimeOut(function delay(is always in milliseconds))

function createBox() {
  let boxContainer = document.getElementById("boxContainer");
  let div = document.createElement("div");
  div.classList.add("box");
  boxContainer.appendChild(div);
}
