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
let hasResult = false;

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

    // Code for number buttons
    digitBtn.addEventListener("click", () => {
      document.getElementById("screen").value = document.getElementById("screen").value  + `${i}`;

      // If operator button is pressed, assign to num2, else assign to num1
      if (hasOperator == true) {
        num2 = parseInt(document.getElementById("screen").value);
      } else if (hasOperator == false) {
        num1 = parseInt(document.getElementById("screen").value);
      }
      
      // If a number button is pressed while result is shown, clear screen and display new number
      if (hasResult) {
        document.getElementById("screen").value = ''
        document.getElementById("screen").value = document.getElementById("screen").value  + `${i}`;
        hasResult = false;
        if (hasOperator == true) {
          num2 = parseInt(document.getElementById("screen").value);
        } else if (hasOperator == false) {
          num1 = parseInt(document.getElementById("screen").value);
        }
      }

    });

  }
}

addBtn.addEventListener("click", () => {
  if (num1 > 0 && num2 > 0 && hasOperator == true) {
    let result = operate(operator, num1, num2);
    num1 = result;
    document.getElementById("screen").value = num1;
  } else {
    document.getElementById("screen").value = ''
  }
  operator = add;
  hasOperator = true;
});


subtractBtn.addEventListener("click", () => {
  if (num1 > 0 && num2 > 0 && hasOperator == true) {
    let result = operate(operator, num1, num2);
    num1 = result;
    document.getElementById("screen").value = num1;
  } else {
    document.getElementById("screen").value = ''
  }
  operator = subtract;
  hasOperator = true;
});

multiplyBtn.addEventListener("click", () => {
  if (num1 > 0 && num2 > 0 && hasOperator == true) {
    let result = operate(operator, num1, num2);
    num1 = result;
    document.getElementById("screen").value = num1;
  } else {
    document.getElementById("screen").value = ''
  }
  operator = multiply;
  hasOperator = true;
});

divideBtn.addEventListener("click", () => {
  if (num1 > 0 && num2 > 0 && hasOperator == true) {
    let result = operate(operator, num1, num2);
    num1 = result;
    document.getElementById("screen").value = num1;
  } else {
    document.getElementById("screen").value = ''
  }
  operator = divide;
  hasOperator = true;
});

clearBtn.addEventListener("click", () => {
  num1 = 0;
  num2 = 0;
  hasOperator = false;
  document.getElementById("screen").value = ''
})



equalsBtn.addEventListener("click", () => {
  let result = operate(operator, num1, num2);
  if (num1 == 0 && num2 == 0 && operator == divide) {
    result = "Yeah nice try"
  }
  hasOperator = false;
  hasResult = true;
  document.getElementById("screen").value = result;
});

