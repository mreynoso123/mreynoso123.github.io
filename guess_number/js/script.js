//Global variables
let randomNumber;
let attempts = 0;

initializeGame();

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