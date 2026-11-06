let userScore = 0;
let computerScore = 0;
let choices = ["rock", "paper", "scissors"];
for (let round = 1; round <= 5; round++) {
  let userChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();
  let randomIndex = Math.floor(Math.random() * 3);
  let computerChoice = choices[randomIndex];
  console.log("------ Round " + round + " ------");
  console.log("You: " + userChoice);
  console.log("Computer: " + computerChoice);
  if (userChoice === computerChoice) {
    console.log("Draw!");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!");
    userScore++;
  } else {
    console.log("Computer wins!");
    computerScore++;
  }
}
console.log(" **Final Score**");
console.log("Your score: " + userScore);
console.log("Computer score: " + computerScore);

if (userScore > computerScore) {
  console.log("Congratulations! You won the game!");
} else if (userScore < computerScore) {
  console.log("Computer won the game!");
} else {
  console.log("The game is a draw!");
}
