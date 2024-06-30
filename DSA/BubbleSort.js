function bubbleSort(arr) {
  console.log(arr);
  for (let i = arr.length - 1; i >= 0; i--) {
    let swapped = false;
    for (let j = 0; j < i; j++) {
      console.log("comparer", arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log("sorted", arr);
  return arr;
}

bubbleSort([1, 3, 4, 2, 9, 5, 6, 10]);