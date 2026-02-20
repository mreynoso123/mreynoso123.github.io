document.querySelector("button").addEventListener("click", gradeQuiz);

function gradeQuiz(){
    console.log("Grading quiz...");
    document.querySelector("#validationFdbk").innerHTML=""; //resets validation feedback
    /*if (!isFormValid()) {
        return;
    } */

    //variables
    let score = 0;
    let q1Response = document.querySelector("#q1").value.toLowerCase();
    console.log(q1Response);

    //Grading q1Response
    if (q1Response == "sacramento") {
        document.querySelector("#q1Feedback").innerHTML="Correct!";
        document.querySelector("#q1Feedback").className="bg-success text-white";
        document.querySelector("#markImg1").innerHTML="<img src='img/checkmark.png' alt='Checkmark'>";
        score += 20;
    } else {
        document.querySelector("#q1Feedback").innerHTML="Incorrect!";
        document.querySelector("#q1Feedback").className="bg-warning text-white";
        document.querySelector("#markImg1").innerHTML="<img src='img/xmark.png' alt='Xmark'>";
    }

    document.querySelector("#totalScore").innerHTML=`Total Score: ${score}`;
}

