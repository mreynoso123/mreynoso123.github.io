//Global variables
let randomNumber;
let attempts = 0;

initializeGame();

//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);

function initializeGame() {
    /* floor rounds down to nearest integer
    (Math.random() * 99) +1 generates random int 1 through 99 */
    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("randomNumber: " + randomNumber);

    //hiding the Reset button
    document.querySelector("#resetBtn").style.display = "none";

    //adding focus to textbox
    document.querySelector("#playerGuess").focus();
}

function checkGuess() {
    //placing feedback var here helps hide valid number range
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);

    if (guess < 1 || guess > 99) {
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }

    attempts++;
    console.log("Attempts: " + attempts);
    feedback.style.color = "orange";
    if (guess == randomNumber) {
        feedback.textContent = "You guessed it! You won!"
        feedback.style.color = "darkgreen";
        gameOver();
    } else {
        document.querySelector("#guesses").textContent += guess + " ";
        if (attempts == 7){
            feedback.textContent = "Sorry, you lost!";
            feedback.style.color = "red";
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
    guessBtn.style.display = "none"; //hides Guess button
    resetBtn.style.display = "inline"; //displays Reset button

}