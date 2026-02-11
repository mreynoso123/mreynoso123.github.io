//Global variables
let randomNumber;
let attempts = 0;
let attemptsLeft = 7;
let totalWins = 0;
let totalLosses = 0;

initializeGame();

//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

function initializeGame() {
    /* floor rounds down to nearest integer
    (Math.random() * 99) +1 generates random int 1 through 99 */
    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("randomNumber: " + randomNumber);
    attempts = 0;
    attemptsLeft = 7;

    //hiding the Reset button
    document.querySelector("#resetBtn").style.display = "none";

    //showing the Guess button
    document.querySelector("#guessBtn").style.display = "inline";

    let playerGuess = document.querySelector("#playerGuess");
    playerGuess.focus(); //adding focus to textbox
    playerGuess.value = ""; //clearing the textbox

    let feedback = document.querySelector("#feedback");
    feedback.textContent = ""; //clearing the feedback

    let attemptsRemaining = document.querySelector("#attemptsRemaining");
    attemptsRemaining.textContent = "";

    //clearing previous guesses
    document.querySelector("#guesses").textContent = "";

    let totalWinsEl = document.querySelector("#wins");
    totalWinsEl.textContent = totalWins;

    let totalLossesEl = document.querySelector("#losses");
    totalLossesEl.textContent = totalLosses;
}

function checkGuess() {
    //placing feedback var here helps hide valid number range
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";

    let attemptsRemaining = document.querySelector("#attemptsRemaining");
    attemptsRemaining.textContent = "";

    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);

    if (guess < 1 || guess > 99) {
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }

    attempts++;
    attemptsRemaining.textContent = "Attempts remaining: " + (attemptsLeft - attempts);
    console.log("Attempts: " + attempts);
    feedback.style.color = "orange";

    if (guess == randomNumber) {
        feedback.textContent = "You guessed it! You won!"
        feedback.style.color = "darkgreen";
        totalWins++;
        gameOver();
    } else {
        document.querySelector("#guesses").textContent += guess + " ";
        if (attempts == 7) {
            feedback.textContent = "Sorry, you lost!";
            feedback.style.color = "red";
            totalLosses++;
            gameOver();
        } else if (guess > randomNumber) {
            feedback.textContent = "Guess was high";
        } else {
            feedback.textContent = "Guess was low";
        }
    }
}

function gameOver() {
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    
    //updates win/loss immediately when gameOver is called
    document.querySelector("#wins").textContent = totalWins;
    document.querySelector("#losses").textContent = totalLosses;
    guessBtn.style.display = "none"; //hides Guess button
    resetBtn.style.display = "inline"; //displays Reset button
}