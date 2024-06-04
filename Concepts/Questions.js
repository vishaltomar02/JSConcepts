// Q1
function promise() {
  return Promise.reject()
}

promise()
  .then(function () {
    console.log("Then 1")
  })
  .catch(function () {
    console.log("Catch 1")
  })
  .then(function () {
    console.log("Then 2")
  })
  .catch(function () {
    console.log("Catch 2")
  })
  .then(function () {
    console.log("Then 3")
  });

//Q2
class fox {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`I am ${this.name}`);
  }
}

const newFox = new fox("Cunny");
setTimeout(newFox.speak, 1000);

(function foo() {
  console.log("foo")
})();

foo();