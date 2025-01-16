const numbers = [];
const oddNumbers = [];
const evenNumbers = [];

const form = document.querySelector("form");
const numberInput = document.getElementById("number");
const numberBankOutput = document.querySelector("#numberBank output");
const oddsOutput = document.querySelector("#odds output");
const evensOutput = document.querySelector("#evens output");
const sortOneButton = document.getElementById("sortOne");
const sortAllButton = document.getElementById("sortAll");

form.addEventListener("submit", addNumber);
sortOneButton.addEventListener("click", sortFirst);
sortAllButton.addEventListener("click", sortAll);

function render() {
  numberBankOutput.textContent = numbers.join(", ");
  oddsOutput.textContent = oddNumbers.join(", ");
  evensOutput.textContent = evenNumbers.join(", ");
}
function addNumber(event) {
  event.preventDefault();
  const input = numberInput.value;

  if (!isNaN(input) && input.trim() !== "") {
    numbers.push(Number(input));
  }

  numberInput.value = "";
  render();
}

function sortFirst() {
  if (numbers.length === 0) return;

  const number = numbers.shift();
  if (number % 2 === 0) {
    evenNumbers.push(number);
  } else {
    oddNumbers.push(number);
  }

  render();
}

function sortAll() {
  while (numbers.length > 0) {
    const number = numbers.shift();
    if (number % 2 === 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
  }

  render();
}

render();
