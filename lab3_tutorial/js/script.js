document.querySelector("button").addEventListener("click", gradeQuiz);

//global variables
var score = 0;
var attempts = localStorage.getItem("total_attempts");
displayQ4Choices();

function displayQ4Choices() {
    let q4ChiocesArray = ["Gingy", "Fiona", "Dragon", "Merlin"];
    q4ChiocesArray = _.shuffle(q4ChiocesArray);

    for ( let i=0; i < q4ChiocesArray.length; i++) {
        document.querySelector("#q4Choices").innerHTML += ` <input type="radio" name="q4" id="${q4ChiocesArray[i]}" value="${q4ChiocesArray[i]}"> <label for="${q4ChiocesArray[i]}" > ${q4ChiocesArray[i]}</label>`;
    }
}

function isFormValid(){
    let isValid = true;
    if(document.querySelector("#q1").value == ""){
        isValid = false;
        document.querySelector("#validationFdbk").innerHTML="Question 1 was not answered";
    }

    return isValid;
}

function rightAnswer(index) {
    document.querySelector(`#q${index}Feedback`).innerHTML="Correct!";
    document.querySelector(`#q${index}Feedback`).className="bg-success text-white";
    document.querySelector(`#markImg${index}`).innerHTML="<img src='img/checkmark.png' alt='Checkmark'>";
    score += 20;
}

function wrongAnswer(index) {
    document.querySelector(`#q${index}Feedback`).innerHTML="Incorrect!";
    document.querySelector(`#q${index}Feedback`).className="bg-warning text-white";
    document.querySelector(`#markImg${index}`).innerHTML="<img src='img/xmark.png' alt='Xmark'>";
}

function gradeQuiz(){
    console.log("Grading quiz...");
    document.querySelector("#validationFdbk").innerHTML=""; //resets validation feedback
    if (!isFormValid()) {
        return;
    }

    //variables
    score = 0;
    let q1Response = document.querySelector("#q1").value.toLowerCase();
    let q2Response = document.querySelector("#q2").value;
    let q4Response = document.querySelector("input[name=q4]:checked").value;
    console.log(q1Response + " " + q2Response);

    //Grading q1Response
    if (q1Response == "shrek") {
        rightAnswer(1);
    } else {
        wrongAnswer(1);
    }

    //Grading q2Response
    if (q2Response == "lf") {
        rightAnswer(2);
    } else {
        wrongAnswer(2);
    }

    //Grading q3Response
    if(document.querySelector("#Donkey").checked && document.querySelector("#Puss").checked && 
    !document.querySelector("#Doris").checked && !document.querySelector("#Hook").checked){
        rightAnswer(3);
    } else {
        wrongAnswer(3);
    }

    //Grading q4Response
    if (q4Response == "Fiona") {
        rightAnswer(4);
    } else {
        wrongAnswer(4);
    }

    document.querySelector("#totalScore").innerHTML=`Total Score: ${score}`;
    document.querySelector("#totalAttempts").innerHTML=`Total Attempts: ${++attempts}`;
    localStorage.setItem("total_attempts", attempts);
}

