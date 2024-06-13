function getSpecifiedNum(row, col) {
  if (row < 0 || col < 0 || col > row) {
    throw new Error("Invalid Row or Column");
  }
  let value = 1;
  for (let i = 1; i < col; i++) {
    value *= (row - i) / (i)
  }
  return value;
}

console.log(getSpecifiedNum(3, 4));

console.log(1 / 0);