Array.prototype.reducePolyFill = function (callback, initialValue) {
  const array = this;
  if (typeof array === "object" && Array.isArray(array)) {
    let computedValue = initialValue ?? this[0];
    for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
      computedValue = callback(computedValue, this[i], i);
    }
    return computedValue;
  }
  else {
    throw Error("Not an array");
  }
}
console.log([1, 4, 5, 9, 19].reduce((acc, curr) => {
  console.log(acc[curr], curr, acc);
  acc[curr] = curr;
  return acc;
}, {}));