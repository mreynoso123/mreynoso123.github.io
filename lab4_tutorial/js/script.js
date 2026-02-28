//alert("hello");

//eventlistener
//use change instead of click because click doesn't work properly with input type="text"
document.querySelector("#zip").addEventListener("change", displayCity);
document.querySelector("#state").addEventListener("change", displayCounties);

//APIs require async functions w/ await keywords
async function displayCity(){
    //alert(document.querySelector("#zip").value)
    let zipCode = document.querySelector("#zip").value;

    //${zipCode} let's the user input change the web API by the zipcode variable
    let url = `https://csumb.space/api/cityInfoAPI.php?zip=${zipCode}`
    console.log(zipCode);
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    //innerHTML is used to retrieve, set, or modify/override HTML content 
    document.querySelector("#city").innerHTML = data.city;
    document.querySelector("#latitude").innerHTML = data.latitude;
    document.querySelector("#longitude").innerHTML = data.longitude;
}

async function displayCounties(){
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

    for (let i of data){
        countylist.innerHTML += `<option> ${i.county}</option>`
    }
}