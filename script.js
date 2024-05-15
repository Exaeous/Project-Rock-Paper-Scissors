"use script";

const choices = ["Rock", "Paper", "Scissors"];

const randomChoices = Math.floor(Math.random() * choices.length);

const computerChoice = choices[randomChoices];

function getComputerChoice() {
  return computerChoice;
}

console.log(getComputerChoice());
