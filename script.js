
let tossChoiceValue = '';
let tossResult = ''; // <-- use let here, not const

function tossChoice(tossValue){
    tossChoiceValue = tossValue;
    document.querySelector('#toss-choice').innerText = `You choose to play ${tossChoiceValue}.`;
    makeTrashDisappear();
}

function makeTrashDisappear(){
    document.querySelector("#even-odd-container").style.display = "none";
}

function playToss(playerTossMove){
    const computerTossMove = playComputerMove();

    if (tossChoiceValue === 'even') {
        if ((playerTossMove + computerTossMove) % 2 === 0) {
            tossResult = 'You Win the Toss.';
        } else {
            tossResult = 'You Lost the Toss.';
        }
    } else {
        if ((playerTossMove + computerTossMove) % 2 === 0) {
            tossResult = 'You Lost the Toss.';
        } else {
            tossResult = 'You Win the Toss.';
        }
    }

    document.querySelector('#score-toss-choice').innerText =
    `You choose to play: ${playerTossMove} Computer choose to play: ${computerTossMove}`;

    document.querySelector('#result-toss').innerText = tossResult;

    chooseBatBowl();
}

function playComputerMove(){
    let tossRun = Math.random();

    if (tossRun < 1/6){
        computerTossMove = 1;
    } else if (tossRun < 2/6){
        computerTossMove = 2;
    } else if (tossRun < 3/6){
        computerTossMove = 3;
    } else if (tossRun < 4/6){
        computerTossMove = 4;
    } else if (tossRun < 5/6){
        computerTossMove = 5;
    } else {
        computerTossMove = 6;
    }


    return computerTossMove;
}

function chooseBatBowl(){
    if(tossResult === 'You Win the Toss.'){
        document.querySelector('#batting-bowling').innerHTML = `
        <button onclick="playerBatting()">Batting</button>
        <button onclick="computerBatting()">Bowling</button>`;

        document.querySelector("#toss-num-btn-container").style.display = "none";
    } else {
        computerChooseBatBowl();
        document.querySelector("#toss-num-btn-container").style.display = "none";
    }
}

function computerChooseBatBowl(){
    let randomBatBowl  = Math.random();
    let computerBatBowlChoice = '';
    if (randomBatBowl < 1/2){
        computerBatBowlChoice = 'Bat';
    } else {
        computerBatBowlChoice = 'Ball';
    }
    document.querySelector('#computer-choice-bat-bowl').innerText = `Computer choose to ${computerBatBowlChoice}`;
}


// function computerChooseBatBowl(){
//     let randomBatBowl  = Math.random();
//     let computerBatBowlChoice = '';
//     if (randomBatBowl < 1/2){
//         computerBatBowlChoice = 'Bat';
//     } else {
//         computerBatBowlChoice = 'Ball';
//     }
//     document.querySelector('#computer-choice-bat-bowl').innerText = `Computer choose to ${computerBatBowlChoice}`;
// }
