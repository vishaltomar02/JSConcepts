// Error object has two main properties:
// 1.name -> for ex: "Reference Error"
// 2. message
// Also current call stack (Stack), etc 

try {
  lalala; // error, variable is not defined!
} catch (err) {
  console.log("name", err.name); // ReferenceError
  console.log("message", err.message); // lalala is not defined
  console.log("stack", err.stack); // ReferenceError: lalala is not defined at (...call stack)

  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  console.log(err); // ReferenceError: lalala is not defined
}

const json = '{"age": 28}';
try {
  let parsed = JSON.parse(json);
  if (!parsed.name) {
    throw new SyntaxError("no name property found");
  }

} catch (err) {
  console.log(err)
}


function readData() {
  let json = '{"age": 15}';
  try {
    let user = JSON.parse(json);

    blabla();
    if (!user.name) {
      throw new SyntaxError("Incomplete data: no name");
    }

    alert(user.name);
  }
  catch (err) {
    if (err instanceof SyntaxError) {
      console.log("JSON error:", err.message);
    }
    else {
      throw err;
    }
  }
}

try {
  readData();
}
catch (err) {
  console.log("External Error:" + err.name)
}


// try catch with fibonacci
let diff, result = "";
function fib(n) {
  if (n < 0 || Math.trunc(n) !== n) throw new Error("Must not be negative and should be an integer.")
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    result += " " + a;
    let temp = a;
    a = b;
    b = temp + b;
  }
}

let start = Date.now();
try {
  fib(10);
} catch (err) {
  result = 0;
  console.log(err);
} finally {
  diff = Date.now() - start;
}

console.log(result, "Execution took:" + diff)