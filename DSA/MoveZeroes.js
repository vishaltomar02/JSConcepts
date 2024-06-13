
// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {Array<any>} list
 * @returns {void}
 */
function moveZeros(list) {
  // your code here
  for (let i = 0; i < list.length; i++) {
    let noRemainingNonZeroes = false;
    if (list[i] === 0) {
      console.log("0 Pos", i)
      for (let j = i + 1; j < list.length; j++) {
        if (list[j] !== 0) {
          console.log(i, j)
          let temp = list[i];
          list[i] = list[j];
          list[j] = temp;
          break;
        }
        if (j === (list.length - 1)) {
          noRemainingNonZeroes = true;
        }
      }
    }
    if (noRemainingNonZeroes) break;
  }
  console.log(list)
}

moveZeros([1, 0, 0, 2, 3, 0, 4, 0])


