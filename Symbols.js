let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // not "id": 123
};


// In order to have global symbols which can be used in different parts of our program, then

// read from the global registry
let globalId = Symbol.for("globalId"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("globalId");

// the same symbol
alert(globalId === idAgain); // true