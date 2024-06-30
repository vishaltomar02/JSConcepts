function SelectionSort(arr) {
  const start = performance.now();
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  console.log(arr);
  const end = performance.now();
  console.log(end - start)
  return arr;
}

SelectionSort([1, 3, 4, 2, 9, 5, 6, 10]);