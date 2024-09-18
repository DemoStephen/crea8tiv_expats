const prevExpression = document.querySelector("[data-prev-operand]");
const currentExpression = document.querySelector("[data-current-operand]");

const numberButtons = document.querySelectorAll("[data-number]");
const resetButton = document.querySelector("[data-reset]");
const deleteButton = document.querySelector("[data-delete]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsToBtn = document.querySelector("[data-equals]");

let operandsAndOperators = {
  currentOperand: "",
  previousOperand: "",
  operator: undefined,
};

function updateScreen() {
  if (operandsAndOperators.operator) {
    prevExpression.innerText = `${operandsAndOperators.previousOperand} ${operandsAndOperators.operator}`;
  } else if (operandsAndOperators.previousOperand.includes("=")) {
    prevExpression.innerText = operandsAndOperators.previousOperand;
  } else prevExpression.innerText = "";

  currentExpression.innerText = operandsAndOperators.currentOperand;
}

for (const numBtn of numberButtons) {
  numBtn.addEventListener("click", appendNumber);
  function appendNumber() {
    if (
      numBtn.dataset.number === "." &&
      operandsAndOperators.currentOperand.includes(".")
    )
      return;

    const value = this.dataset.number;

    operandsAndOperators = {
      ...operandsAndOperators,
      currentOperand: `${operandsAndOperators.currentOperand}${value}`,
    };

    updateScreen();
  }
}

resetButton.addEventListener("click", reset);
function reset() {
  operandsAndOperators = {
    currentOperand: "",
    previousOperand: "",
    operator: undefined,
  };

  updateScreen();
}

deleteButton.addEventListener("click", deleteNumber);
function deleteNumber() {
  const operand = operandsAndOperators.currentOperand;
  const newOperand = operand.slice(0, -1);

  operandsAndOperators = {
    ...operandsAndOperators,
    currentOperand: newOperand,
  };

  updateScreen();
}

for (const operator of operatorButtons) {
  operator.addEventListener("click", addOperator);
  function addOperator() {
    if (operandsAndOperators.operator || !operandsAndOperators.currentOperand)
      return;

    operandsAndOperators = {
      previousOperand: operandsAndOperators.currentOperand,
      currentOperand: "",
      operator: operator.dataset.operator,
    };

    updateScreen();
  }
}

equalsToBtn.addEventListener("click", computeResult);
function computeResult() {
  if (
    !operandsAndOperators.previousOperand ||
    !operandsAndOperators.currentOperand ||
    !operandsAndOperators.operator
  )
    return;

  const prev = +operandsAndOperators.previousOperand;
  const current = +operandsAndOperators.currentOperand;
  const operator = operandsAndOperators.operator;

  let result;

  switch (operator) {
    case "+":
      result = prev + current;
      break;

    case "-":
      result = prev - current;
      break;

    case "x":
      result = prev * current;
      break;

    case "/":
      result = prev / current;
      break;
  }

  operandsAndOperators = {
    previousOperand: `${prev} ${operator} ${current} =`,
    currentOperand: `${result}`,
    operator: undefined,
  };

  updateScreen();
}
