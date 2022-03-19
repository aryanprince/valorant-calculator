function process() {
    var cur = document.getElementById("currentVP").value;
    var req = document.getElementById("requiredVP").value;
    var requiredVP = req - cur;

    if (requiredVP >= 0 && requiredVP <= 999999) {
        calculate(requiredVP);
    } else {
        alert("Please enter a number less than 1 million");
    }
}

function calculate(requiredVP) {
    document.getElementById("exampleModalLabel").innerHTML = "Cost for " + requiredVP + " VP";

    var vp11000 = parseInt(requiredVP / 11000);
    requiredVP = requiredVP % 11000;
    var vp5350 = parseInt(requiredVP / 5350);
    requiredVP = requiredVP % 5350;
    var vp3650 = parseInt(requiredVP / 3650);
    requiredVP = requiredVP % 3650;
    var vp2050 = parseInt(requiredVP / 2050);
    requiredVP = requiredVP % 2050;
    var vp1000 = parseInt(requiredVP / 1000);
    requiredVP = requiredVP % 1000;
    var vp475 = parseInt(requiredVP / 475);

    var noofvp475 = vp475;
    var noofvp1000 = vp1000;
    var noofvp2050 = vp2050;
    var noofvp3650 = vp3650;
    var noofvp5350 = vp5350;
    var noofvp11000 = vp11000;

    var total_USD = vp475 * 5 + vp1000 * 10 + vp2050 * 20 + vp3650 * 35 + vp5350 * 50 + vp11000 * 100;
    var total_GBP = vp475 * 4.5 + vp1000 * 9 + vp2050 * 18 + vp3650 * 30 + vp5350 * 45 + vp11000 * 90;
    var total_INR = vp475 * 399 + vp1000 * 799 + vp2050 * 1599 + vp3650 * 2699 + vp5350 * 3999 + vp11000 * 7900;
    var total_noof = noofvp475 + noofvp1000 + noofvp2050 + noofvp3650 + noofvp5350 + noofvp11000;

    if (document.getElementById("currency").options[document.getElementById("currency").selectedIndex].value == "USD") {
        document.getElementById("message").innerHTML = "$ " + total_USD;
    }
    if (document.getElementById("currency").options[document.getElementById("currency").selectedIndex].value == "GBP") {
        document.getElementById("message").innerHTML = "£ " + total_GBP;
    }
    if (document.getElementById("currency").options[document.getElementById("currency").selectedIndex].value == "INR") {
        document.getElementById("message").innerHTML = "₹ " + total_INR;
    }
    if (document.getElementById("currency").options[document.getElementById("currency").selectedIndex].value == "QAR") {
        document.getElementById("message").innerHTML = "QR " + total_USD * 3.64;
    }

    document.getElementById("amount").innerHTML = noofvp475 + "x 475" + ", " + noofvp1000 + "x 1000" + ", " + noofvp2050 + "x 2050" + ", " + noofvp3650 + "x 3650" + ", " + noofvp5350 + "x 5350" + ", " + noofvp11000 + "x 11000" + ", ";
}
