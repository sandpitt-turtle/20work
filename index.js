const numbers = [];

const form = document.querySelector("form");
const output = document.querySelector("output");

form.addEventListener("submit", addNumber);
sortOneButton.addEventListener("click", sortFirst);
sortAllButton.addEventListener("click", sortAll);

render();

function render() {
  const numberElems = numbers.map((number) => {
    const elem = document.createElement("span");
    elem.textContent = number;
    elem.classList.add("number");

    return elem;
  });

  output.replaceChildren(
    ...numberElems.flatMap((elem, index) =>
      //
      index < numberElems.length - 1
        ? [elem, document.createTextNode(", ")]
        : [elem]
    )
  );
  //
}

function onButtonClick(event) {
  if (event.target.classList.contains("number")) {
    console.log(event.target.textContent);
    const idx = numbers.indexOf(event.target.textContent);
    numbers.splice.apply(idx, 1);
  }

  render();
}

function addNumber(event) {
  event.preventDefault();

  const number = event.target.number.value;
  numbers.push(Number(number));
  console.log("NUMBERS : ", numbers);
  event.target.number.value = "";
  render();
}
