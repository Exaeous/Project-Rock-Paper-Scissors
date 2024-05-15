"use script";

const choices = ["ROCK", "PAPER", "SCISSORS"];

const randomChoices = Math.floor(Math.random() * choices.length);

const computerChoice = choices[randomChoices];

let humanChoice = prompt("Select your choice");

humanChoice = humanChoice.toUpperCase();

function getComputerChoice() {
  return computerChoice;
}

console.log(getComputerChoice());

function getHumanhoice() {
  return humanChoice;
}

console.log(getHumanhoice());
