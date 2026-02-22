//Event Listeners
document.querySelector("#calcBtn").addEventListener("click", calcTotal);

//variables
let prices = [8, 5, 2];

function calcTotal() {
    let subtotal = 0;
    let shipping = 3;
    let tax = 0.0725;
    let discount = 0.15;
    let discountAmount = 0;
    let total = 0;
    let validPromo = "javascript"

    for (let i = 0; i < prices.length; i++) {
        let qty = Number(document.querySelector("#qty" + i).value);
        let lineTotal = prices[i] * qty;
        subtotal += lineTotal;
        document.querySelector("#itemTotal" + i).textContent = "$" + lineTotal.toFixed(2);
    }

    document.querySelector("#subtotal").textContent = "Subtotal: $" + subtotal.toFixed(2);

    let shipSelect = document.querySelector("#shippingSelect").value;
    if (shipSelect != "deliv") {
        shipping = 0;
    }

    

    document.querySelector("#shipping").textContent = "Shipping: $" + shipping.toFixed(2);
    document.querySelector("#tax").textContent = "Tax: $" + (subtotal * tax).toFixed(2) + " @ " + (tax * 100).toFixed(2) + "%";

    let promoInput = document.querySelector("#promoInput").value.toLowerCase();
    if (promoInput == validPromo) {
        discountAmount = subtotal * discount;
        document.querySelector("#discount").textContent = "Discount: $" + (discountAmount).toFixed(2) + " @ " + (discount * 100).toFixed(2) + "%";
        document.querySelector("#validPromo").textContent = " Promo Applied!";
        document.querySelector("#validPromo").style.color = "green";
    } else {
        document.querySelector("#discount").textContent = "Discount: $" + (discountAmount).toFixed(2);
        document.querySelector("#validPromo").textContent = " Invalid Code!";
        document.querySelector("#validPromo").style.color = "red";
    }

    total = subtotal + shipping + (subtotal * tax) - (discountAmount);
    document.querySelector("#total").textContent = "Total: $" + total.toFixed(2);

}