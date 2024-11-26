const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const result = document.querySelector("#result");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const button = document.querySelector("#button");
let scorePlayer = 0;
let scoreComputer = 0;

button.addEventListener("click", () => {
  playerDisplay.textContent = `Player:`;
  computerDisplay.textContent = `Computer:`;
  result.textContent = "";
  scorePlayer = 0;
  scoreComputer = 0;
  playerScore.textContent = "Player score: 0";
  computerScore.textContent = "Computer score: 0";
});

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result1;
   
  if (playerChoice === computerChoice) {
    result1 = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result1 = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result1 = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result1 = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }
  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  result.textContent = result1;

  result.classList.remove("green", "red");

  switch (result1) {
    case "YOU WIN!":
      result.classList.add("green");
      scorePlayer++;
      playerScore.textContent = "Player score:" + scorePlayer;
      break;
    case "YOU LOSE!":
      result.classList.add("red");
      scoreComputer++;
      computerScore.textContent = "Computer score:" + scoreComputer;
      break;
  }
 
}
