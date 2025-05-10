let display = document.getElementById('display');

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  if (display.value === '') return;
  const lastChar = display.value.slice(-1);
  if ('+-*/'.includes(lastChar)) {
    display.value = display.value.slice(0, -1);
  }
  display.value += operator;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function calculateSqrt() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = 'Error';
  }
}
