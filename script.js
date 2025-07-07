// script.js

// DOM Element References
const tossChoiceText = document.querySelector("#toss-choice");
const evenOddContainer = document.querySelector("#even-odd-container");
const tossNumBtnContainer = document.querySelector("#toss-num-btn-container");
const tossScoreText = document.querySelector("#score-toss-choice");
const tossResultText = document.querySelector("#result-toss");
const battingBowlingContainer = document.querySelector("#batting-bowling");
const computerBatBowlChoice = document.querySelector(
  "#computer-choice-bat-bowl",
);
const batBallBtnContainer = document.querySelector(
  "#bat-ball-num-btn-container",
);
const playerScoreText = document.querySelector("#player-total-run");
const outResultText = document.querySelector("#out-result");

// State Variables
let tossChoiceValue = "";
let tossResult = "";
let playerTotalRun = 0;
let gameMode = null;

// Utility: Generate random number between 1–6
function generateRandomRun() {
  Math.floor(Math.random() * 6) + 1;
}

// Handle Toss Choice
function tossChoice(tossValue) {
  tossChoiceValue = tossValue;
  tossChoiceText.innerText = `You choose to play ${tossValue}.`;

  evenOddContainer.style.display = "none";
  tossNumBtnContainer.style.display = "block";
}

// Play Toss Round
function playToss(playerTossMove) {
  const computerTossMove = generateRandomRun();
  const tossSum = playerTossMove + computerTossMove;

  const isPlayerWin =
    (tossSum % 2 === 0 && tossChoiceValue === "even") ||
    (tossSum % 2 !== 0 && tossChoiceValue === "odd");

  tossResult = isPlayerWin ? "You Win the Toss." : "You Lost the Toss.";

  tossScoreText.innerText = `You chose: ${playerTossMove}, Computer chose: ${computerTossMove}`;
  tossResultText.innerText = tossResult;

  handleBatBowlChoice();
}

// Decide Bat/Bowl after toss
function handleBatBowlChoice() {
  tossNumBtnContainer.style.display = "none";

  if (tossResult === "You Win the Toss.") {
    showBatBowlButtons();
  } else {
    computerChooseBatBowl();
  }
}

// Show Bat/Bowl buttons for player
function showBatBowlButtons() {
  battingBowlingContainer.innerHTML = `
    <button onclick="startGame('batting')">Batting</button>
    <button onclick="startGame('bowling')">Bowling</button>
  `;
}

// Start Game with Mode
function startGame(mode) {
  gameMode = mode;
  playerTotalRun = 0;

  battingBowlingContainer.innerHTML = "";
  batBallBtnContainer.style.display = "block";

  playerScoreText.innerText = "";
  outResultText.innerText = "";

  if (mode === "batting") {
    playerBattingF(batting);
  }
}

// Computer's Bat/Bowl Choice
function computerChooseBatBowl() {
  const compMode = Math.random() < 0.5 ? "batting" : "bowling";
  computerBatBowlChoice.innerText = `Computer chose to ${compMode}`;
  startGame(compMode === "batting" ? "bowling" : "batting");
}

//Player's Batting
function playerBattingF(mode) {}

// Handle Batting/Bowling Move
function playRun(playerInput) {
  if (!gameMode) return;

  const playerMove = playerInput;
  const computerMove = generateRandomRun();

  if (playerMove === computerMove) {
    outResultText.innerText = `You are out.`;
    playerScoreText.innerText = `Your total score is ${playerTotalRun}`;
    batBallBtnContainer.style.display = "none";
  } else {
    if (gameMode === "batting") {
      playerTotalRun += playerMove;
      playerScoreText.innerText = `Your score: ${playerTotalRun}`;
    }
    // Add bowling logic if needed later
  }
}
