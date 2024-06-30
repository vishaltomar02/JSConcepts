function Calculator() {
  this.calculateOperations = {};
  this.addMethod = function addMethod(operator, operatorFunction) {
    this.calculateOperations[operator] = operatorFunction;
  }
  this.addMethod("+", (a, b) => a + b);
  this.addMethod("-", (a, b) => a - b);
  this.calculate = function (calcStr) {
    const [operand1, operator, operand2] = calcStr.split(" ");
    if (!this.calculateOperations[operator] || isNaN(operand1) || isNaN(operand2)) {
      return NaN;
    }
    return this.calculateOperations[operator](+operand1, +operand2);
  }
}


console.log("nan", "" + NaN);
let calc = new Calculator();

console.log(calc.calculate("3 + 7"))

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

console.log(calc);
let result = calc.calculate("2 * 39");
let result1 = calc.calculate("100000 / 100");
let result2 = calc.calculate("1000 - 100");
let result3 = calc.calculate("903 + 10");
console.log(result, result1, result2, result3);



// SWAP ELEMENTS USING DESTRUCTURE

[array[i], array[j]] = [array[j], array[i]];
