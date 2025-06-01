// script.js - Cleaned and functional version

let tossChoiceValue = '';
let tossResult = '';
let playerTotalRun = 0;
let playerMove = null;
let computerMove = null;

function tossChoice(tossValue) {
  tossChoiceValue = tossValue;
  document.querySelector('#toss-choice').innerText = `You choose to play ${tossChoiceValue}.`;
  document.querySelector("#even-odd-container").style.display = "none";
  document.querySelector("#toss-num-btn-container").style.display = "block";
}

function playToss(playerTossMove) {
  const computerTossMove = generateRandomRun();
  const tossSum = playerTossMove + computerTossMove;

  if ((tossSum % 2 === 0 && tossChoiceValue === 'even') || (tossSum % 2 !== 0 && tossChoiceValue === 'odd')) {
    tossResult = 'You Win the Toss.';
  } else {
    tossResult = 'You Lost the Toss.';
  }

  document.querySelector('#score-toss-choice').innerText =
    `You chose: ${playerTossMove}, Computer chose: ${computerTossMove}`;

  document.querySelector('#result-toss').innerText = tossResult;

  chooseBatBowl();
}

function generateRandomRun() {
  return Math.floor(Math.random() * 6) + 1; // returns 1 to 6
}

function chooseBatBowl() {
  document.querySelector("#toss-num-btn-container").style.display = "none";

  if (tossResult === 'You Win the Toss.') {
    document.querySelector('#batting-bowling').innerHTML = `
      <button onclick="startGame('batting')">Batting</button>
      <button onclick="startGame('bowling')">Bowling</button>
    `;
  } else {
    computerChooseBatBowl();
  }
}

function startGame(mode) {
  document.querySelector("#batting-bowling").innerHTML = '';
  document.querySelector("#bat-ball-num-btn-container").style.display = "block";
  window.gameMode = mode;
  playerTotalRun = 0;
  document.querySelector('#player-total-run').innerText = '';
  document.querySelector('#out-result').innerText = '';
}

function computerChooseBatBowl() {
  const choice = Math.random() < 0.5 ? 'batting' : 'bowling';
  document.querySelector('#computer-choice-bat-bowl').innerText = `Computer chose to ${choice}`;
  startGame(choice === 'batting' ? 'bowling' : 'batting');
}

function playRun(playerInput) {
  if (typeof window.gameMode === 'undefined') return;

  playerMove = playerInput;
  computerMove = generateRandomRun();

  if (playerMove === computerMove) {
    document.querySelector('#out-result').innerText = `You are out.`;
    document.querySelector('#player-total-run').innerText = `Your total score is ${playerTotalRun}`;
    document.querySelector('#bat-ball-num-btn-container').style.display = 'none';
  } else {
    if (window.gameMode === 'batting') {
      playerTotalRun += playerMove;
      document.querySelector('#player-total-run').innerText = `Your score: ${playerTotalRun}`;
    } else {
      // bowling mode logic can be added later
    }
  }
}
