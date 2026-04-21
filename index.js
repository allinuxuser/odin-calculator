function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let num1;
let num2;
let operator;

function operate(func, a, b) {
  func(a, b)
}

const buttonContainer = document.createElement("div");

const allDigitButtonContainer = document.createElement("div");




const container = document.querySelector("#container");

const screen = document.createElement("input");
const addBtn = document.createElement("button");
const subtractBtn = document.createElement("button");
const divideBtn = document.createElement("button");
const multiplyBtn = document.createElement("button");
const clearBtn = document.createElement("button");

addBtn.textContent = "Add";
subtractBtn.textContent = "Subtract";
divideBtn.textContent = "Divide";
multiplyBtn.textContent = "Multiply";
clearBtn.textContent = "Clear";

screen.id = "screen";





container.appendChild(screen);
container.appendChild(allDigitButtonContainer);
container.appendChild(buttonContainer);
buttonContainer.appendChild(addBtn);
buttonContainer.appendChild(subtractBtn);
buttonContainer.appendChild(multiplyBtn);
buttonContainer.appendChild(divideBtn);
buttonContainer.appendChild(clearBtn);



let currentCount = 0;

for (let i = 1; i <= 4; i++) {
  digitButtonContainer = document.createElement("div");
  currentCount = i;
  for (let i = currentCount; i <= (currentCount + 3); i++) {
    digitBtn = document.createElement("button");
    digitBtn.textContent = `${i}`
    digitBtn.classList.add("digit");
    digitBtn.id = `${i}`
    allDigitButtonContainer.appendChild(digitButtonContainer);
    digitButtonContainer.appendChild(digitBtn);
    digitBtn.addEventListener("click", () => {
      document.getElementById("screen").value = `${i}`;
    });

  }
}

