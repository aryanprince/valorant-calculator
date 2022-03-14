let current = document.getElementById("current");
let needed = document.getElementById("needed");
let cost = document.getElementById("cost");

needed.oninput = () => {
  let output = (parseFloat(needed.value) - parseFloat(current.value)) / 100;
  cost.value = parseFloat(output.toFixed(2));
};

fahrenheit.oninput = () => {
  let output = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  celsius.value = parseFloat(output.toFixed(2));
};

document.getElementById("calculate").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("calculate").innerHTML = "YOU CLICKED ME!";
}
