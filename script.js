let humanScore = 0;
let computerScore = 0;

const rockButt = document.getElementById("rock-butt");
const paperButt = document.getElementById("paper-butt");
const scissorsButt = document.getElementById("scissors-butt");

rockButt.addEventListener("click", playgame(rock));
paperButt.addEventListener("click", playgame(paper));
scissorsButt.addEventListener("click", playGame(scissors));

function playGame(humanSelection) {
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

function getComputerChoice() {
    computer_random = Math.floor(Math.random()* 100);
    if (computer_random <= 33) {
        return "rock";
    }
    if (computer_random > 33 && computer_random <= 66) {
        return "paper";
    }
    if (computer_random > 66) {
        return "scissors";
    }
}

/*
function getHumanChoice() {
    let human_choice = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
    if (human_choice === "rock") {
        return human_choice;
    }
    if (human_choice === "paper") {
        return human_choice;
    }
    if (human_choice === "scissors") {
        return human_choice;
    }
    else {
        console.log("Improper Input. Try Again");
        return;
    }
}

*/

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        return "Tie";
    }
    if (humanChoice === "paper" && computerChoice === "paper") {
        return "Tie";
    }
    if (humanChoice === "scissors" && computerChoice === "scissors") {
        return "Tie";
    }
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose! Paper beats Rock";
    }
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You Win! Rock beats Scissors";
    }
    if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You Win! Paper beats Rock";
    }
    if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You lose! Scissors beats Paper";
    }
    if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You lose. Rock beats Scissors";
    }
    if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You Win! Scissors beats Paper";
    }
}


playGame();








