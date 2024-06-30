function debounce(fn, coolDownPeriod) {
  let timerId;
  return function () {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      console.log(arguments)
      fn.apply(this, arguments);
    }, coolDownPeriod)
  }
}

const testFn = function (...args) {
  console.log([].join.call(args), args)
  return [].join.call(arguments);
}

// const debouncedTest = debounce(testFn, 1000)
// setTimeout(() => debouncedTest("hey", "Vishal"), 100)
// setTimeout(() => debouncedTest("hey", "Vishal"), 200)
// setTimeout(() => debouncedTest("hey", "Vishal"), 400)


// PRACTICE

function debounceAgain(fnToDebounce, delay) {
  let timerId;
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(() => fnToDebounce.apply(this, arguments), delay);
  }
};

const newFn = function (...args) {
  console.log(Array.join.call(args, " "), args);
  return [].join.call(arguments);
}

const debouncedFunc = debounceAgain(testFn, 150)

setTimeout(() => debouncedFunc("hey", "Vishal"), 100)
setTimeout(() => debouncedFunc("hey", "Vishal", "second"), 200)
setTimeout(() => debouncedFunc("hey", "Vishal", "third"), 400)


