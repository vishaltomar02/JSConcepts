Array.prototype.customFilter = function (handler) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (handler(this[i], i)) newArr.push(this[i])
  }
  return newArr;
}

console.log([1, 3, 4, 2, 5, 7].customFilter((item, idx) => item > 2));