

/**
 * @param {number[]} arr
 * @returns number
 */
function findSingle(arr) {
  // your code here
  let numMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (numMap.has(arr[i])) numMap.delete(arr[i]);
    else numMap.set(arr[i], true)
  }
  console.log([...numMap.keys()]);
  return [...numMap.keys()][0];
}
const arr = [10, 2, 2, 1, 0, 0, 10]
findSingle(arr) // 1
