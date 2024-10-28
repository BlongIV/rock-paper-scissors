let humanScore = 0;
let computerScore = 0;

const rockButt = document.getElementById("rockButt");
const paperButt = document.getElementById("paperButt");
const scissorsButt = document.getElementById("scissorsButt");
const restartButt = document.getElementById("restart");
let resultMessageContainer = document.querySelector(".results");
let computerScoreContainer = document.querySelector(".computer-score");
let humanScoreContainer = document.querySelector(".player-score");

restartButt.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    resultMessageContainer.textContent = "New Game";
    humanScoreContainer.textContent = "Human Score: " + humanScore;
    computerScoreContainer.textContent = "Computer Score: " + computerScore;
})

rockButt.addEventListener("click", () => {
    if (computerScore < 5 && humanScore < 5) {
        playGame("rock");
    }
    if (computerScore === 5) {
        resultMessageContainer.textContent = "Computer Score is 5. Computer wins.";
    }
    if (humanScore === 5) {
        resultMessageContainer.textContent = "Human Score is 5. Human wins.";
    }
});
paperButt.addEventListener("click", () => {
    if (computerScore < 5 && humanScore < 5) {
        playGame("paper");
    }
    if (computerScore === 5) {
        resultMessageContainer.textContent = "Computer Score is 5. Computer wins.";
    }
    if (humanScore === 5) {
        resultMessageContainer.textContent = "Human Score is 5. Human wins.";
    }
});
scissorsButt.addEventListener("click", () => {
    if (computerScore < 5 && humanScore < 5) {
        playGame("scissors");
    }
    if (computerScore === 5) {
        resultMessageContainer.textContent = "Computer Score is 5. Computer wins.";
    }
    if (humanScore === 5) {
        resultMessageContainer.textContent = "Human Score is 5. Human wins.";
    }
});

function playGame(humanSelection) {
    const computerSelection = getComputerChoice();
    const resultMessage = playRound(humanSelection, computerSelection);
    resultMessageContainer.textContent = resultMessage;
    computerScoreContainer.textContent = "Computer Score: " + computerScore;
    humanScoreContainer.textContent = "Human Score: " + humanScore;
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

s






