"use strict";

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice:");
  console.log(humanChoice);
}

function getComputerChoice() {
  let randomChoice = Math.random();
  let computerChoice = "";
  if (randomChoice > 0 && randomChoice <= 1 / 3) {
    computerChoice = "Rock";
  } else if (randomChoice > 1 / 3 && randomChoice <= 2 / 3) {
    computerChoice = "Paper";
  } else if (randomChoice > 2 / 3 && randomChoice < 1) {
    computerChoice = "Scissors";
  }
  console.log(computerChoice);
}

getHumanChoice();
getComputerChoice();
