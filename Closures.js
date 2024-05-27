var keeps = [];

for (var i = 0; i < 3; i++) {
  keeps[i] = function keepI() {
    // closure over `i`
    return i;
  };
}

console.log(keeps[0]());
console.log(keeps[1]());
console.log(keeps[2]());

// Changing var to let keyword in for loop will give us the expected i values from 0 to 2... 
// because a new variable will get created for every iteration using let and 
// this variable will get closed over by the keep function.