// This task can be done with IF / ELSE statements:
function basicOp(operation, value1, value2) {
  if (operation == "+") {
    return value1 + value2;
  } else if (operation == "-") {
    return value1 - value2;
  } else if (operation == "/") {
    return value1 / value2;
  } else if (operation == "*") {
    return value1 * value2;
  } else return 0; // If no operation is added, return 0
}

console.log(basicOp("+", 2, 3)); // Output is 5
console.log(basicOp("-", 5, 6)); // Output is -1
console.log(basicOp("/", 9, 3)); // Output is 3
console.log(basicOp("*", 2, 3)); // Output is 6

// Also this task can be done with SWITCH STATEMENT
function basicOpSwitch(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}

console.log(basicOpSwitch("+", 2, 3)); // Output is 5
console.log(basicOpSwitch("-", 5, 6)); // Output is -1
console.log(basicOpSwitch("/", 9, 3)); // Output is 3
console.log(basicOpSwitch("*", 2, 3)); // Output is 6
