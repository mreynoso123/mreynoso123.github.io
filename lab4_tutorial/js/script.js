//alert("hello");

//eventlistener
//use change instead of click because click doesn't work properly with input type="text"
document.querySelector("#zip").addEventListener("change", displayCity);

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

    document.querySelector("#city").innerHTML = data.city;
    document.querySelector("#latitude").innerHTML = data.latitude;
    document.querySelector("#longitude").innerHTML = data.longitude;
}