document.querySelector("button").addEventListener("click", gradeQuiz);

let guessInput = document.querySelector("#textInput");

//<label><input type="radio" name="q1" value="font-color"> font-color</label>
shuffleQ1Choices();
function shuffleQ1Choices(){
    let q1Choices = ["Charizard", "Charmeleon", "Charmander"]; //array

    for (let i of q1Choices) {
    let radioElement = document.createElement("input");
    radioElement.type = "radio";
    radioElement.name = "q1";
    radioElement.value = i;

    let labelElement = document.createElement("label");
    labelElement.textContent = i;

    labelElement.prepend(radioElement); //append() puts radioElement after labelElement
    labelElement.prepend(" ");
    document.querySelector("#q1ChoicesDiv").append(labelElement); //displays labelElement on webpage

    console.log(labelElement);
    }
}

function gradeQuiz(){
    let q1UserAnswer = document.querySelector("input[name=q1]:checked").value;
    let q2UserAnswer = document.querySelector("#q2Question").value;
    let q3UserAnswer = document.querySelector("#q3Question").value;
    let q4UserAnswer = document.querySelector("#q4Question").value;

    let correctText = "Pikachu";
    let correctDrop = "option1";
    let correctNum = 16;

    let q2feedback = document.querySelector("#q2Feedback");
    if(q2UserAnswer == correctText){
        q2feedback.textContent = "You got it right!";
        q2feedback.style.color = "darkgreen";
    } else {
        q2feedback.textContent = "Incorrect!";
    }

    let q3feedback = document.querySelector("#q3Feedback");
    if(q3UserAnswer == correctDrop){
        q3feedback.textContent = "You got it right!";
        q3feedback.style.color = "darkgreen";
    } else {
         q3feedback.textContent = "Incorrect!";
    }

    let q4feedback = document.querySelector("#q4Feedback");
    if(q4UserAnswer == correctNum){
        q4feedback.textContent = "You got it right!";
        q4feedback.style.color = "darkgreen";
    } else {
        q4feedback.textContent = "Incorrect!";
    }


    //alert("Selected answer: " + q1UserAnswer + ", " + q2UserAnswer+ ", " q3);
}