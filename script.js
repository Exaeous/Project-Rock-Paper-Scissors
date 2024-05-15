"use script";

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  let humansChoice = prompt("Select your choice");
  humansChoice = humansChoice.toUpperCase();
  return humansChoice;
}

function getComputerChoice() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  let randomChoices = Math.floor(Math.random() * choices.length);
  let computersChoice = choices[randomChoices];
  return computersChoice;
}

for (let i = 1; i <= 5; i++) {
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

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  console.log(`Human chose ${humanSelection}`);
  console.log(`Computer chose ${computerSelection}`);

  playRound(humanSelection, computerSelection);

  console.log(`Human score is  ${humanScore}`);
  console.log(`Computer score is ${computerScore}`);
}
