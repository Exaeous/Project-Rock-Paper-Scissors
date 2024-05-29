"use script";

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  let randomChoices = Math.floor(Math.random() * choices.length);
  let computersChoice = choices[randomChoices];
  return computersChoice;
}

const computerSelection = getComputerChoice();

rockButton.addEventListener("click", () => {
  playRound("ROCK", computerSelection);
});
paperButton.addEventListener("click", () => {
  playRound("PAPER", computerSelection);
});
scissorsButton.addEventListener("click", () => {
  playRound("SCISSORS", computerSelection);
});

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
    console.log("You won! Rock beats Scissors");
    humanScore++;
  } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
    console.log("You won! Paper beats Rock");
    humanScore++;
  } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
    console.log("You won! Scissors beats Paper");
    humanScore++;
  } else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
    console.log("You lose! Scissors beats Paper");
    computerScore++;
  } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
    console.log("You lose! Rock beats Scissors");
    computerScore++;
  } else {
    console.log("It's a draw!");
  }
}
