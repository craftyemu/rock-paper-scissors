// Get random choice of options from computer
let arr = ["Rock", "Paper", "Scissors"];
let playerSelection;
let computerSelection;

function getComputerChoice() {
    let computerSelection = (arr[(Math.floor(Math.random() * arr.length))]);
    console.log(computerSelection);
    return computerSelection;
}

// Get selection from user
function getPlayerChoice () {
    let playerSelection = prompt("Which do you choose?: ");
    console.log(playerSelection);
    return playerSelection;
}

// Compare user and computer selections
function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();

    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")) {
        roundWinner = "Player";
        }
    else if (playerSelection === computerSelection) {
        roundWinner = "Tie";
        }
    else (roundWinner = "Computer")    
    
    console.log(roundWinner);
}

playRound();

// Determine win, lose, or draw
// Add to score