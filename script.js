function process() {
    var cur = document.getElementById("currentVP").value;
    var req = document.getElementById("requiredVP").value;
    var requiredVP = req - cur;

    if (requiredVP >= 0 && requiredVP <= 999999) {
        calculate(requiredVP);
    } else {
        alert("Please enter a number less than 1 million");
        document.getElementById("vp475").value = "";
        document.getElementById("vp1000").value = "";
        document.getElementById("vp2050").value = "";
        document.getElementById("vp2050").value = "";
        document.getElementById("vp5350").value = "";
        document.getElementById("vp11000").value = "";
    }
}

function calculate(requiredVP) {
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

    document.getElementById("vp475").value = vp475;
    document.getElementById("vp1000").value = vp1000;
    document.getElementById("vp2050").value = vp2050;
    document.getElementById("vp3650").value = vp3650;
    document.getElementById("vp5350").value = vp5350;
    document.getElementById("vp11000").value = vp11000;

    if (document.getElementById("currency").options[document.getElementById("currency").selectedIndex].value == "usd") {
        document.getElementById("cost").value = "$ " + (vp475 * 5 + vp1000 * 10 + vp2050 * 20 + vp3650 * 35 + vp5350 * 50 + vp11000 * 100);
    }
    if (document.getElementById("currency").options[document.getElementById("currency").selectedIndex].value == "gbp") {
        document.getElementById("cost").value = "£ " + (vp475 * 4.5 + vp1000 * 9 + vp2050 * 18 + vp3650 * 30 + vp5350 * 45 + vp11000 * 90);
    }
    if (document.getElementById("currency").options[document.getElementById("currency").selectedIndex].value == "inr") {
        document.getElementById("cost").value = "₹ " + (vp475 * 399 + vp1000 * 799 + vp2050 * 1599 + vp3650 * 2699 + vp5350 * 3999 + vp11000 * 7900);
    }
    if (document.getElementById("currency").options[document.getElementById("currency").selectedIndex].value == "qar") {
        document.getElementById("cost").value = "QR " + ((vp475 * 5 + vp1000 * 10 + vp2050 * 20 + vp3650 * 35 + vp5350 * 50 + vp11000 * 100) * 3.64).toFixed(2);
    }
}

