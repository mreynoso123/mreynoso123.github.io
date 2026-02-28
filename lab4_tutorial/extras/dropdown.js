
async function pageLoad() {
    let url = `https://csumb.space/api/allStatesAPI.php`;
    try {
       const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
       const data = await response.json();
       console.log(data);
    

       let statesSelect = document.querySelector('#statesSelect'); 

       // build each option in the select using a for loop
       for (let stateData of data) {
            console.log(stateData);

            //create the element
            let stateOption = document.createElement('option');

            //configure the element
            //set the id to the abbreviation
            stateOption.id = stateData.usps; 
            //set the visible full state name
            stateOption.textContent = stateData.state;
            //set the 'value' (data) to the abbreviation
            stateOption.value = stateData.usps;

            //add the element to the html
            statesSelect.appendChild(stateOption);

       }     

    
    } catch (err) {
            if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
            } else {
            alert(err.message);
            }
    }
    
}

pageLoad();




