
function MaxSubArrayValue(arr) {
  let maxSum = 0, partialSum = 0;
  for (let i = 0; i < arr.length; i++) {
    partialSum += arr[i];
    maxSum = Math.max(maxSum, partialSum);
    console.log(partialSum, maxSum)
    if (partialSum < 0) partialSum = 0;
  }
  console.log(maxSum);
}

MaxSubArrayValue([10, 12, 5, -10, 49, 10, -4, 20, 5, 1, -19, 18]);