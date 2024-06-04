const isDigit = (val) => /^\d+$/.test(val);

function removeSpaces(str) {
  return Array.from(str).reduce((acc, curr) => {
    acc += curr.trim();
    return acc;
  }, "");
}
var calculate = function (s) {
  let sign = 1, sum = 0;
  const expressionStack = [];
  s = removeSpaces(s);
  console.log(s)

  let i = 0;
  while (i < s.length) {
    if (isDigit(s[i])) {
      console.log(s[i], i);
      let num = 0;
      while (isDigit(s[i])) {
        num = (num * 10) + +(s[i]);
        i++;
        sum += (num * sign);
      }
      continue;
    }
    if (s[i] === "+") {
      sign = 1;
    }
    else if (s[i] === "-") {
      sign = -1;
    }
    else if (s[i] === "(") {
      expressionStack.push(sum);
      expressionStack.push(sign);
      sum = 0;
      sign = +1;
    }
    else if (s[i] === ")") {
      sum = expressionStack.pop() * sum;
      sum += expressionStack.pop();
    }
    i++;
  }

  return sum;
}

console.log(calculate("(1 + (4 + 5 + 2) - 3) + (6 + 8)"));