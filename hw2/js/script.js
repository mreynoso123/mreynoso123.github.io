//Event Listeners
document.querySelector("#calcBtn").addEventListener("click", calcTotal);

//variables
let prices = [8, 5, 2];

function calcTotal() {
    let subtotal = 0;
    let shipping = 3;
    let tax = 7.25;
    let discount = 0.15;

    for (let i = 0; i < prices.length; i++) {
        let qty = Number(document.querySelector("#qty" + i).value);
        let lineTotal = prices[i] * qty;
        subtotal += lineTotal;
        document.querySelector("#itemTotal" + i).textContent = "$" + lineTotal;
    }

    document.querySelector("#subtotal").textContent = "Subtotal: $" + subtotal.toFixed(2);

    // if(shipping.document.querySelector("#deliv").value != "deliv") {
    //     shipping = 0;
    // }

    document.querySelector("#shipping").textContent = "Shipping: $" + shipping.toFixed(2);
    document.querySelector("#tax").textContent = "Tax: " + tax + "%";



}