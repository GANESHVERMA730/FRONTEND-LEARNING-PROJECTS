const input = document.querySelector(".input");
const buttons = document.querySelectorAll(".button");

let expression = "";
let memory = 0;

// Update display
function updateDisplay() {
  input.value = expression;
}

// Safe calculation
function calculate() {
  try {
    expression = Function('"use strict"; return (' + expression + ')')().toString();
  } catch {
    expression = "Error";
  }
  updateDisplay();
}

// Button clicks
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (value) {
      expression += value;
    }

    if (action === "clear") {
      expression = "";
    }

    if (action === "backspace") {
      expression = expression.slice(0, -1);
    }

    if (action === "calculate") {
      calculate();
      return;
    }

    if (action === "percent") {
      expression = (parseFloat(expression) / 100).toString();
    }

    if (action === "memory-add") {
      memory += parseFloat(expression) || 0;
      expression = "";
    }

    updateDisplay();
  });
});

document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
    expression += e.key;
  } 
  else if (e.key === "Enter") {
    calculate();
    return;
  } 
  else if (e.key === "Backspace") {
    expression = expression.slice(0, -1);
  } 
  else if (e.key.toLowerCase() === "c") {
    expression = "";
  }

  updateDisplay();
});
