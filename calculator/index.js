let display = document.getElementById("result");

function input(input) {
  display.value += input;
}

function clearResult() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "error";
  }
}
