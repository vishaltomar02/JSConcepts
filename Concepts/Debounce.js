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

const debouncedTest = debounce(testFn, 1000)
setTimeout(() => debouncedTest("hey", "Vishal"), 100)
setTimeout(() => debouncedTest("hey", "Vishal"), 200)
setTimeout(() => debouncedTest("hey", "Vishal"), 400)