function flatten(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = [...result, ...flatten(item)];
    }
    else {
      result.push(item);
    }
  }
  // console.log(result);
  return result;
}


// flatten Array using reduce
function flattenReduce(arr) {
  return arr.reduce((acc, curr) => [...acc, ...(Array.isArray(curr) ? flattenReduce(curr) : [curr])], [])
}


// flatten array using stack

function flattenUsingStack(arr) {
  let result = [];
  let stack = [...arr];
  while (stack.length) {
    const elem = stack.pop()
    if (Array.isArray(elem)) {
      stack.push(...elem);
    }
    else {
      result.push(elem);
    }
  }
  return result.reverse();
}

flatten([1, 2, [3, 4, [5, 6, [7, 8]]]]);
console.log("flattenReduce", flattenReduce([1, 2, [3, 4, [5, 6, [7, 8]]]]))
console.log("flattenStack", flattenUsingStack([1, 2, [3, 4, [5, 6, [7, 8]]]]))