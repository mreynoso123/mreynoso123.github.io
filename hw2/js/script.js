//Event Listeners
document.querySelector("#calcBtn").addEventListener("click", calcTotal);
document.querySelector("#resetBtn").addEventListener("click", resetCart);

//variables
let prices = [8, 5, 2];

const resetBtn = document.querySelector("#resetBtn");
resetBtn.style.display = "none";

function calcTotal() {
    let subtotal = 0;
    let shipping = 0;
    let tax = 0.0725;
    let discount = 0.15;
    let discountAmount = 0;
    let total = 0;
    let validPromo = "javascript"

    for (let i = 0; i < prices.length; i++) {
        let qty = Number(document.querySelector("#qty" + i).value) || 0;
        let lineTotal = prices[i] * qty;
        subtotal += lineTotal;
        document.querySelector("#itemTotal" + i).textContent = "$" + lineTotal.toFixed(2);
    }

    let shipSelect = document.querySelector("#shippingSelect").value;
    let shipImg = document.querySelector("#shipImg");

    if (shipSelect == "dine") {
        shipImg.src = "img/dine.png";
        shipImg.alt = "Dine In";
    } else if (shipSelect == "take") {
        shipImg.src = "img/take.png";
        shipImg.alt = "Take Out";
    } else if (shipSelect == "deliv") {
        shipImg.src = "img/delivery.png";
        shipImg.alt = "Delivery";
        shipping = 3;
    } else {
        shipImg.src = "";
        shipImg.alt = "";
    }

    document.querySelector("#subtotal").textContent = "Subtotal: $" + subtotal.toFixed(2);
    document.querySelector("#shipping").textContent = "Shipping: $" + shipping.toFixed(2);
    document.querySelector("#tax").textContent = "Tax: $" + (subtotal * tax).toFixed(2) + " @ " + (tax * 100).toFixed(2) + "%";

    let promoInput = document.querySelector("#promoInput").value.toLowerCase();

    if (promoInput.trim() === "") {
        document.querySelector("#discount").textContent = "Discount: $" + (discountAmount).toFixed(2);
        document.querySelector("#validPromo").textContent = "";
        document.querySelector("#validPromo").style.color = "";
    } else if (promoInput == validPromo) {
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
    resetBtn.style.display = "inline";
}

function resetCart() {
    resetBtn.style.display = "none";

    for (let i = 0; i < prices.length; i++) {
        document.querySelector("#qty" + i).value = 0;
        document.querySelector("#itemTotal" + i).textContent = "";
    }

    let shipImg = document.querySelector("#shipImg");
    shipImg.src = "";
    shipImg.alt = "";

    document.querySelector("#shippingSelect").value = "";
    document.querySelector("#promoInput").value = "";
    document.querySelector("#validPromo").textContent = "";
    document.querySelector("#validPromo").style.color = "";
    document.querySelector("#subtotal").textContent = "Subtotal: ";
    document.querySelector("#shipping").textContent = "Shipping: ";
    document.querySelector("#tax").textContent = "Tax: ";
    document.querySelector("#discount").textContent = "Discount: ";
    document.querySelector("#total").textContent = "Total: ";

}