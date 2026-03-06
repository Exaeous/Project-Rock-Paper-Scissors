"use strict";

let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock-btn");
const paperButton = document.querySelector(".paper-btn");
const scissorsButton = document.querySelector(".scissors-btn");

const showResult = document.querySelector(".result");

rockButton.addEventListener("click", () =>
  playRound("Rock", getComputerChoice()),
);
paperButton.addEventListener("click", () =>
  playRound("Paper", getComputerChoice()),
);
scissorsButton.addEventListener("click", () =>
  playRound("Scissors", getComputerChoice()),
);

function getComputerChoice() {
  let randomChoice = Math.random();
  let computerChoice = " ";
  if (randomChoice > 0 && randomChoice <= 1 / 3) {
    computerChoice = "Rock";
  } else if (randomChoice > 1 / 3 && randomChoice <= 2 / 3) {
    computerChoice = "Paper";
  } else if (randomChoice > 2 / 3 && randomChoice < 1) {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

function playRound(humanChoice, computerChoice) {
  let finalMessage = " ";
  if (humanChoice === "Rock" && computerChoice === "Paper") {
    computerScore++;
    finalMessage = "You lose! Paper beats Rock";
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    computerScore++;
    finalMessage = "You lose! Scissors beats Paper";
  } else if (humanChoice === "Scissors " && computerChoice === "Rock") {
    computerScore++;
    finalMessage = "You lose! Rock beats Scissors";
  } else if (computerChoice === "Rock" && humanChoice === "Paper") {
    humanScore++;
    finalMessage = "You win! Paper beats Rock";
  } else if (computerChoice === "Paper" && humanChoice === "Scissors") {
    humanScore++;
    finalMessage = "You win! Scissors beats Paper";
  } else if (computerChoice === "Scissors" && humanChoice === "Rock") {
    humanScore++;
    finalMessage = "You win! Rock beats Scissors";
  } else {
    finalMessage = "It's a draw";
  }
  console.log(humanScore);
  console.log(computerScore);
  showResult.textContent = finalMessage;
}
