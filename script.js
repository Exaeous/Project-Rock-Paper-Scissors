"use script";

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const resetButton = document.querySelector(".reset");

const result = document.querySelector(".result");

let humanScore = 0;
let computerScore = 0;

const showHumanScore = document.querySelector(".human-score");
const showComputerScore = document.querySelector(".computer-score");

function getComputerChoice() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  let randomChoices = Math.floor(Math.random() * choices.length);
  let computersChoice = choices[randomChoices];
  return computersChoice;
}

rockButton.addEventListener("click", () => {
  playRound("ROCK", getComputerChoice());
});
paperButton.addEventListener("click", () => {
  playRound("PAPER", getComputerChoice());
});
scissorsButton.addEventListener("click", () => {
  playRound("SCISSORS", getComputerChoice());
});

resetButton.addEventListener("click", () => {
  window.location.reload();
});

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
    result.textContent = "You won! Rock beats Scissors";
    humanVictory();
    gameOver();
  } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
    result.textContent = "You won! Paper beats Rock";
    humanVictory();
    gameOver();
  } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
    result.textContent = "You won! Scissors beats Paper";
    humanVictory();
    gameOver();
  } else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
    result.textContent = "You lose! Paper beats Rock";
    computerVictory();
    gameOver();
  } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
    result.textContent = "You lose! Scissors beats Paper";
    computerVictory();
    gameOver();
  } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
    result.textContent = "You lose! Rock beats Scissors";
    computerVictory();
    gameOver();
  } else {
    result.textContent = "It's a draw!";
  }
}

function humanVictory() {
  humanScore++;
  showHumanScore.textContent = humanScore;
}

function computerVictory() {
  computerScore++;
  showComputerScore.textContent = computerScore;
}

function gameOver() {
  if (humanScore === 5 && computerScore < 5) {
    result.textContent = "You Win! The Computer Lost";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  } else if (computerScore === 5 && humanScore < 5) {
    result.textContent = " The Computer Wins! You Lost";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}
