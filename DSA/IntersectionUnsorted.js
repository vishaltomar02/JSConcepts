function getIntersection(arr1, arr2) {
  // your code here
  const intersectionSet = new Set();
  const map = new Map();
  console.log(intersectionSet);
  for (let item of arr1) {
    if (!map.has(item)) map.set(item, item)
  }
  for (let item of arr2) {
    if (map.has(item)) intersectionSet.add(item)
  }
  console.log([...intersectionSet.values()]);
  return [...intersectionSet.values()]
}

getIntersection([1, 2, 3], [2, 3, 4])