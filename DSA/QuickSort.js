/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function quickSort(arr) {
  let arrLength = arr.length;
  if (arrLength <= 1) return arr;
  let pivot = arr[arrLength - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    }
    else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));