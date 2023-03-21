const clickButton = document.getElementById("clickButton");
const counterElement = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

let counter = 0;

clickButton.addEventListener("click", function() {
  counter++;
  counterElement.textContent = counter;
});

resetButton.addEventListener("click", function() {
  counter = 0;
  counterElement.textContent = counter;
});
