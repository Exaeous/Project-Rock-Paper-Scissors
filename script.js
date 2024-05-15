"use script";

const choices = ["ROCK", "PAPER", "SCISSORS"];

let randomChoices = Math.floor(Math.random() * choices.length);

let computerChoice = choices[randomChoices];

let humanChoice = prompt("Select your choice");

humanChoice = humanChoice.toUpperCase();

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  return computerChoice;
}

console.log(getComputerChoice());

function getHumanhoice() {
  return humanChoice;
}

console.log(getHumanhoice());
