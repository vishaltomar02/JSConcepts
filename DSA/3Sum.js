// Better Solution

function triplet(arr) {
  // keep a set of triplets
  const tripletsSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    // Kepping a map for kepping inbetween numbers between i and j
    const inBetweenSet = new Set();
    for (j = i + 1; j < arr.length; j++) {
      const thirdNum = -(arr[i] + arr[j]);
      console.log("thirdSum", thirdNum, inBetweenSet)
      if (inBetweenSet.has(thirdNum)) {
        tripletsSet.add([arr[i], arr[j], thirdNum].sort((a, b) => a - b) + "");
        console.log("tripletsSet", tripletsSet)
      }
      inBetweenSet.add(thirdNum)
    }
  }
  return Array.from(tripletsSet, (val) => val.split(","));
}

console.log(triplet([-1, -1, 2, 0, 0, 2, -1, 1]))