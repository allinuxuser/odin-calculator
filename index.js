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



container.appendChild(screen);
container.appendChild(buttonContainer);
buttonContainer.appendChild(addBtn);
buttonContainer.appendChild(subtractBtn);
buttonContainer.appendChild(multiplyBtn);
buttonContainer.appendChild(divideBtn);
buttonContainer.appendChild(clearBtn);
