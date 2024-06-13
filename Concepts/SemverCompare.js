


/**
 * @param {string} v1
 * @param {string} v2
 * @returns 0 | 1 | -1
 */
function compare(v1, v2) {
  // your code here
  const v1Arr = v1.split(".");
  const v2Arr = v2.split(".");
  for (let i = 0; i < v1Arr.length; i++) {
    console.log(v1Arr[i], v2Arr[i])
    if (+v1Arr[i] < +v2Arr[i]) {
      return -1;
    }
    else if (+v1Arr[i] > +v2Arr[i]) {
      return 1;
    }
    continue;
  }
  return 0;
}


console.log(compare('0.1.100', '0.1.99'));