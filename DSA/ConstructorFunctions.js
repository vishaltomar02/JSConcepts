function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false




// Usually, constructors do not have a return statement.Their task is to write all necessary stuff into this, and it automatically becomes the result.

// But if there is a return statement, then the rule is simple:

// If return is called with an object, then the object is returned instead of this.
// If return is called with a primitive, it’s ignored.
// In other words, return with an object returns that object, in all other cases this is returned.

function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  // <-- returns this object
}

alert(new BigUser().name);  // Godzilla, got that object


// By the way, we can omit parentheses after new:

let user1 = new User; // <-- no parentheses
// same as
let user2 = new User();