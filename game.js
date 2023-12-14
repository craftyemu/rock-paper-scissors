// Get random choice of options from computer
let arr = ["ROCK", "PAPER", "SCISSORS"];
let playerSelection;
let compSelection;
let playerWin = 0;
let compWin = 0;

function getComputerChoice() {
    let compSelection = (arr[(Math.floor(Math.random() * arr.length))]);
    console.log(compSelection);
    return compSelection;
}

// Get selection from user
function getPlayerChoice () {
    let playerSelection = prompt("Rock, Paper, or Scissors?: ");
    playerSelection = playerSelection.toUpperCase();
    console.log(playerSelection);
    return playerSelection;
}

// Compare user and computer selections
// Determine win, lose, or draw
// Add to score
function playRound() {
    let compSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();

    if (
        (playerSelection === "ROCK" && compSelection === "SCISSORS") ||
        (playerSelection === "SCISSORS" && compSelection === "PAPER") ||
        (playerSelection === "PAPER" && compSelection === "ROCK")) {
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
}

// Repeat rounds
function playGame() {
    for (rounds = 0; rounds < 5; rounds++) {
        playRound();
    }
    if (playerWin > compWin) {
        console.log(`You won the match by a score of ${playerWin} to ${compWin}!`);
    }
    else if (compWin > playerWin) {
        console.log(`You lost the match by a score of ${compWin} to ${playerWin}.`);
    }
    else {
        console.log(`It's a draw. You both scored ${playerWin} points.`);
    }
}

playGame();