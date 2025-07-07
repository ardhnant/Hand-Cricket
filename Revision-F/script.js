//DOM Element References
const evenBtn = document.querySelector("#even-btn");
const oddBtn = document.querySelector("#odd-btn");
const numBtns = document.querySelector("num-btns");

//Pre declared values
let playerToss;

//Utils
let allNumBtns = () => {
  let html = "";
  for (let i = 1; i < 7; i++) {
    let btn = `<button id="btn-${i}">${i}</button>`;
    html += btn;
  }
  return html;
};

function randomNum(two) {
  if (two) {
    return Math.floor(Math.random() * 2);
  } else {
    return Math.floor(Math.random() * 6) + 1;
  }
}

//Toss
evenBtn.addEventListener("click", () => {
  numBtns.innerHTML = allNumBtns;
  playerToss = "even";
});

oddBtn.addEventListener("click", () => {
  numBtns.innerHTML = allNumBtns;
  playerToss = "odd";
});

function tossEvaluation(tossVal) {
  let computerMove = computerTossMove;
}

let computerTossMove = () => {
  let num = randomNum("two");
  if (num == 0) {
    return "even";
  } else {
    return "odd";
  }
};
