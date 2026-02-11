console.log("Running...");

const max = 10;
let correctNumber = Math.floor(Math.random() * max);
let correctMessage = "Congrats!";
let attempts = 0;

let guessInput = document.querySelector("#guessInput");
let guessButton = document.querySelector("#guessButton");
let guessResult = document.querySelector("#guessResult");


/* function displayWinMessage() {
    guessResult.textContent = correctMessage;
    guessResult.style.color = "green";
} */

guessButton.addEventListener("click", function () {
    attempts++;

    if(attempts< 7){
        if(guessInput.value == correctNumber) {
            guessResult.textContent = correctMessage;
            guessResult.style.color = "green";
            guessResult.textContent = "# of attempts: " + attempts;
        } else if(guessInput.value > correctNumber) {
            guessResult.textContent = "Your guesss was too high";
            guessResult.style.color = "orange";
        } else {
            guessResult.textContent = "Your guess was too low";
            guessResult.style.color = "blue";
        } 
    } else {
        guessResult.textContent = "you lose!";
        guessResult.style.color = "red";
    }    
});

