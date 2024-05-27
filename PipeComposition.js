"use strict"

const times = y => x => x * y;
const sum = y => x => x + y;
const subtract = y => x => x - y;
const divide = y => x => x / y;

console.log(times.name)
const pipe = (funcs) => {
  return function (arg) {
    return funcs.reduce((acc, curr) => {
      console.log(acc, curr.descriptor);
      return curr(acc);
    }, arg)
  }
};


console.log(pipe([
  sum(8),
  times(10),
  times(2),
  divide(4),
  subtract(5)
])(2))