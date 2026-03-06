"use strict";

let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock-btn");
const paperButton = document.querySelector(".paper-btn");
const scissorsButton = document.querySelector(".scissors-btn");

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice:");
  return humanChoice;
}

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
    finalMessage = "You lose! Paper beats Rock";
    computerScore += 1;
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    finalMessage = "You lose! Scissors beats Paper";
    computerScore += 1;
  } else if (humanChoice === "Scissors " && computerChoice === "Rock") {
    finalMessage = "You lose! Rock beats Scissors";
    computerScore += 1;
  } else if (computerChoice === "Rock" && humanChoice === "Paper") {
    finalMessage = "You win! Paper beats Rock";
    humanScore += 1;
  } else if (computerChoice === "Paper" && humanChoice === "Scissors") {
    finalMessage = "You win! Scissors beats Paper";
    humanScore += 1;
  } else if (computerChoice === "Scissors" && humanChoice === "Rock") {
    finalMessage = "You win! Rock beats Scissors";
    humanScore += 1;
  } else {
    finalMessage = "It's a draw";
  }
  return finalMessage;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
