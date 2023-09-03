function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

function answer() {
    let principal = document.getElementById("Principal").value;
    let rate = document.getElementById("Rate").value;
    let time = document.getElementById("Time").value;

    // Validate input
    if (!isNumeric(principal) || !isNumeric(rate) || !isNumeric(time)) {
        alert("Please enter valid numeric values.");
        return;
    }

    principal = parseFloat(principal);
    rate = parseFloat(rate);
    time = parseFloat(time);

    if (principal <= 0 || rate <= 0 || time <= 0) {
        alert("Please enter positive values for Principal, Rate, and Time.");
        return;
    }

    var interest = (principal * rate * time) / 100;
    var total = interest + principal;

    document.getElementById("output_1").innerHTML = principal.toFixed(2);
    document.getElementById("output_2").innerHTML = interest.toFixed(2);
    document.getElementById("output_3").innerHTML = total.toFixed(2);
}

function reset() {
    document.getElementById("Principal").value = "";
    document.getElementById("Rate").value = "";
    document.getElementById("Time").value = "";

    document.getElementById("output_1").innerHTML = "";
    document.getElementById("output_2").innerHTML = "";
    document.getElementById("output_3").innerHTML = "";
}
