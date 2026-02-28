//alert("hello");

//eventlistener
//use change instead of click because click doesn't work properly with input type="text" or select
document.querySelector("#zip").addEventListener("change", displayCity);
document.querySelector("#state").addEventListener("change", displayCounties);
document.querySelector("#username").addEventListener("change", checkUsername);

/* this uses an "on submit" event listener for the <form>
this event listener also requires a parameter including all of the info associated w/ the event 
Notice that the curly brace is inside of the eventlistener parenthesis*/
document.querySelector("#signupForm").addEventListener("submit", function (event) {
    validateForm(event)
});

//APIs require async functions w/ await keywords
async function displayCity() {
    //alert(document.querySelector("#zip").value)
    let zipCode = document.querySelector("#zip").value;
    let zipcodeError = document.querySelector("#zipcodeError");

    //${zipCode} let's the user input change the web API by the zipcode variable
    let url = `https://csumb.space/api/cityInfoAPI.php?zip=${zipCode}`
    console.log(zipCode);
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    //A "Zip code not found" message is displayed, if that's the case.
    if (data === false) { //the URL returns the JSON literal false (without quotes)
        document.querySelector("#zipcodeError").innerHTML = " Zip code not found!"
        zipcodeError.style.color = "red";
        document.querySelector("#city").innerHTML = "";
        document.querySelector("#latitude").innerHTML = "";
        document.querySelector("#longitude").innerHTML = "";
        return; //need to return early
    }

    //innerHTML is used to retrieve, set, or modify/override HTML content 
    document.querySelector("#city").innerHTML = data.city;
    document.querySelector("#latitude").innerHTML = data.latitude;
    document.querySelector("#longitude").innerHTML = data.longitude;
}

async function displayCounties() {
    let state = document.querySelector("#state").value; //this matches the eventListener
    let url = `https://csumb.space/api/countyListAPI.php?state=${state}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    //don't use .value because this field is populated by state variable
    //loops through county objets, displays in county dropdown using <option>
    //appends countyies w/ +=
    let countylist = document.querySelector("#county");
    countylist.innerHTML = "<option> Select County </option>"; //resets county dropdown menu

    /* both of these for loop do the same thing
    for(let i = 0; i<data.length; i++){
        countylist.innerHTML += `<option> ${data[i].county} </option>`
    } */

    for (let i of data) {
        countylist.innerHTML += `<option> ${i.county}</option>`
    }
}

async function checkUsername() {
    let username = document.querySelector("#username").value;
    let url = `https://csumb.space/api/usernamesAPI.php?username=${username}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let usernameError = document.querySelector("#usernameError"); //where the message will display

    //available is the category within the API, not a "catch-all" variable
    if (data.available) {
        usernameError.innerHTML = "Username available!";
        usernameError.style.color = "green";
    } else {
        usernameError.innerHTML = "Username is taken!";
        usernameError.style.color = "red";
    }

}

function validateForm(e) {
    let isValid = true;
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let passwordError = document.querySelector("#”passwordError”");//is not a value, just a <span>
    let retypePass = document.querySelector("#retypePass").value;

    /* if (username.length == 0) {
        document.querySelector("#usernameError").innerHTML = "Username Required!";
        usernameError.style.color = "red";
        isValid = false;
    } */

    if (username.length < 3) {
        document.querySelector("#usernameError").innerHTML = "Username must have at least 3 characters!";
        usernameError.style.color = "red";
        isValid = false;
    }

    //checks the password length
    if (password.length < 6) {
        document.querySelector("#”passwordError”").innerHTML = "Password must have at least 6 characters long!";
        passwordError.style.color = "red";
        isValid = false;
    }

    //checks matching password fields
    if (retypePass != password) {
        document.querySelector("#”passwordError”").innerHTML = "Passwords do not match!"
        passwordError.style.color = "red";
        isValid = false;
    }

    if (!isValid) {
        //e.preventDefault() prevents the form submission
        e.preventDefault();
    }

}