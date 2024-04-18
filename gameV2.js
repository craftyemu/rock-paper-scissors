let playerSelection;
let compSelection;
let playerWin = 0;
let compWin = 0;
const water = document.querySelector("#waterBtn");
const grass = document.querySelector("#grassBtn");
const fire = document.querySelector("#fireBtn");
const playerScore = document.querySelector("#playerScore");
const oppScore = document.querySelector("#oppScore");
const opponent = document.querySelector("#opponent");
const results = document.querySelector("#results");
const final = document.querySelector("#final");

water.onclick = function() {
    playerSelection = "WATER";
    playRound();
}

grass.onclick = function() {
    playerSelection = "GRASS";
    playRound();
}

fire.onclick = function() {
    playerSelection = "FIRE";
    playRound();
}

function getComputerChoice() {
    let arr = ["WATER", "GRASS", "FIRE"];
    let compSelection = (arr[(Math.floor(Math.random() * arr.length))]);
    opponent.textContent = `Your opponent chose ${compSelection}.`;
    console.log(`Your opponent chose ${compSelection}`);
    return compSelection;
}

function playRound() {
    compSelection = getComputerChoice();

    if (
        (playerSelection === "WATER" && compSelection === "FIRE") ||
        (playerSelection === "FIRE" && compSelection === "GRASS") ||
        (playerSelection === "GRASS" && compSelection === "WATER")) {
        roundWinner = `You win! ${playerSelection} beats ${compSelection}!`;
        playerWin++;
        }
    else if (playerSelection === compSelection) {
        roundWinner = `It's a tie. You both chose ${playerSelection}.`;
        }
    else {
        roundWinner = `You lose. ${compSelection} beats ${playerSelection}.`;
        compWin++;
        }
    
    console.log(roundWinner);
    playerScore.textContent = `${playerWin}`;
    oppScore.textContent = `${compWin}`;
    results.textContent = roundWinner;
    playGame();
}

function playGame() {
    if (playerWin === 6 && playerWin > compWin) {
        console.log(`You won the match by a score of ${playerWin} to ${compWin}!`);
        final.textContent = `You won the match!`;
        playerWin = 0;
        compWin = 0;
    }
    else if (compWin === 6 && compWin > playerWin) {
        console.log(`You lost the match by a score of ${compWin} to ${playerWin}.`);
        final.textContent = `You lost the match.`;
        playerWin = 0;
        compWin = 0;
    }
    else {
        console.log(`You have ${playerWin} points. Your opponent has ${compWin} points.`);
        final.textContent = "";
    }
}