"use strict";

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

getComputerChoice();
