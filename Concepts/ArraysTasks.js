
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (matching values)

function filterRange(arr, min, max) {
  return arr.filter(arr => arr >= min && arr <= max);
};


let arr1 = [5, 3, 8, 1];

filterRangeInPlace(arr1, 1, 4); // removed the numbers except from 1 to 4

function filterRangeInPlace(arr, min, max) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val > max || val < min) {
      arr.splice(i, 1);
      i--;
    }
  }
}

console.log("arr1", arr1);


// DECREASING SORT
let arr2 = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

function decreasingSort(arr) {
  arr.sort((a, b) => b - a);
  console.log(arr);
}

decreasingSort(arr2)

console.log(arr2)