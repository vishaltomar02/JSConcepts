


/**
 * @param {string} str
 * @returns {string}
 */

// EXAMPLE:
console.log(uncompress('3(ab)')) // 'ababab'
uncompress('3(ab2(c))') // 'abccabccabcc'
function uncompress(str) {
  // your code here
  let uncompressedStr = "";
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let repeatNum = 0;
    while (/^\d+$/.test(str[i])) {
      repeatNum = repeatNum * 10 + +str[i];
      i++;
    }
    if (str[i] === "(") {
      stack.push(repeatNum);
      stack.push(uncompressedStr);
      uncompressedStr = "";
      repeatNum = 0;
      continue;
    }
    else if (str[i] === ")") {
      const prevStr = stack.pop();
      const repetitions = stack.pop();
      uncompressedStr = prevStr + (uncompressedStr).repeat(repetitions);
      continue;
    }
    else {
      uncompressedStr += str[i];
    }
  }
  return uncompressedStr;
}

console.log(uncompress('12(ab2(c))'))




