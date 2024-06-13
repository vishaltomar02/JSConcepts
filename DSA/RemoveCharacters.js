

/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
  // your code here
  let i = 0;
  let newStrStack = [];

  while (i < input.length) {
    //Check for "b" case
    // check if last element in stack is present and equal to "a"
    // check if next element is present and is equal to "c"
    // if so pop last element from stack

    let lastEl = newStrStack[newStrStack.length - 1];
    let nextEl = input[i + 1];
    console.log(lastEl, nextEl)
    if (input[i] === "b") {
      if (lastEl === "a" && nextEl === "c") {
        newStrStack.pop();
        i = i + 2;
      }
      else {
        i++;
      }
    }

    //Check for "a" case, then
    // check if next element in string is equal to "c"
    // if so then move to i+2 and if not then add "a" to stack
    else if (input[i] === "a") {
      if (nextEl && nextEl === "c") {
        i = i + 2;
      }
      else {
        newStrStack.push(input[i]);
        i++;
      }
    }

    // Check for "c" case, then
    // check if lastElement in stack is "a"
    // if so then pop last element from stack and move to i+1
    // if not then add "c" to stack
    else if (input[i] === "c") {
      if (lastEl && lastEl === "a") {
        newStrStack.pop();
      }
      else {
        newStrStack.push(input[i])
      }
      i++;
    }

    else {
      newStrStack.push(input[i]);
      i++;
    }
  }
  console.log(newStrStack.join("") ?? "");
}

removeChars('a');
