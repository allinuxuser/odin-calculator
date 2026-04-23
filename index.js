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

let num1 = 0;
let num2 = 0;
let operator;
let hasOperator = false;

function operate(func, a, b) {
  return func(a, b)
}

const buttonContainer = document.createElement("div");

const allDigitButtonContainer = document.createElement("div");




const container = document.querySelector("#container");

const screen = document.createElement("input");
const addBtn = document.createElement("button");
const subtractBtn = document.createElement("button");
const divideBtn = document.createElement("button");
const multiplyBtn = document.createElement("button");
const equalsBtn = document.createElement("button");
const clearBtn = document.createElement("button");

addBtn.textContent = "Add";
subtractBtn.textContent = "Subtract";
divideBtn.textContent = "Divide";
multiplyBtn.textContent = "Multiply";
clearBtn.textContent = "Clear";
equalsBtn.textContent = "Equals"

screen.id = "screen";





container.appendChild(screen);
container.appendChild(allDigitButtonContainer);
container.appendChild(buttonContainer);
buttonContainer.appendChild(addBtn);
buttonContainer.appendChild(subtractBtn);
buttonContainer.appendChild(multiplyBtn);
buttonContainer.appendChild(divideBtn);
buttonContainer.appendChild(equalsBtn);
buttonContainer.appendChild(clearBtn);




let currentCount = 0;

for (let i = 1; i <= 1; i++) {
  digitButtonContainer = document.createElement("div");
  for (let i = 0; i <= 9; i++) {
    digitBtn = document.createElement("button");
    digitBtn.textContent = `${i}`
    digitBtn.classList.add("digit");
    digitBtn.id = `${i}`
    allDigitButtonContainer.appendChild(digitButtonContainer);
    digitButtonContainer.appendChild(digitBtn);
    digitBtn.addEventListener("click", () => {
      document.getElementById("screen").value = document.getElementById("screen").value  + `${i}`;
      if (hasOperator == true) {
        num2 = parseInt(document.getElementById("screen").value);
      } else {
        num1 = parseInt(document.getElementById("screen").value);
      }
    });

  }
}

addBtn.addEventListener("click", () => {
  operator = add;
  hasOperator = true;
  document.getElementById("screen").value = ''
});


subtractBtn.addEventListener("click", () => {
  operator = subtract;
  hasOperator = true;
  document.getElementById("screen").value = ''
});

multiplyBtn.addEventListener("click", () => {
  operator = multiply;
  hasOperator = true;
  document.getElementById("screen").value = ''
});

divideBtn.addEventListener("click", () => {
  operator = divide;
  hasOperator = true;
  document.getElementById("screen").value = ''
});

clearBtn.addEventListener("click", () => {
  num1 = 0;
  num2 = 0;
  hasOperator = false;
  document.getElementById("screen").value = ''
})



equalsBtn.addEventListener("click", () => {
  let result = operate(operator, num1, num2);
  hasOperator = false;
  document.getElementById("screen").value = result;
})

