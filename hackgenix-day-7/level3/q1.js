//Build a number guessing game with hints (too high / too low), a counter, and a limit of 5 attempts.

let secretNumber= Math.floor(Math.random() * 100) + 1;
let guess;
let attempts=0;
let maxAttempts=5;
let guessedCorrectly = false;
while(attempts < maxAttempts){
     guess=Number(prompt("Guess a number between 1 and 100"));
     attempts++;
    if(guess > secretNumber){
        console.log("Too high. Let's try again");
    }
    else if(guess < secretNumber){
        console.log("Too low. Let's try again");
    }
    else{
        guessedCorrectly=true;
        console.log("Congratulations! You guessed correctly!");
        break;
    }
    
}
if(guessedCorrectly){
    console.log(`You won! Attempts used: ${attempts}`);
}
else{
     console.log("Sorry! You have used all 5 attempts.");
    console.log(`The correct number is ${secretNumber}`);
}