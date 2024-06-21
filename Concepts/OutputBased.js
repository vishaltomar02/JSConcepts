async function async1() {
  console.log("async1 start");
  const data = await async2();
  console.log(data);
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
  return "async2 completed";
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});

console.log("script end");