// async function async1() {
//   console.log("async1 start");
//   const data = await async2();
//   console.log(data);
//   console.log("async1 end");
// }

// async function async2() {
//   console.log("async2");
//   return "async2 completed";
// }

// console.log("script start");

// setTimeout(function () {
//   console.log("setTimeout");
// }, 0);

// async1();

// new Promise(function (resolve) {
//   console.log("promise1");
//   resolve();
// }).then(function () {
//   console.log("promise2");
// });

// console.log("script end");



// QUESTION ASKED IN INTERVIEW

// Promise.resolve().then(() => {
//   console.log(1);
// });
// queueMicrotask(() => console.log(2));
// setTimeout(() => console.log(3), 0);
// console.log(4);
// new Promise(() => console.log(5));
// (async () => console.log(6))();

// My OUTPUT: 4, 5, 6, 1, 2, 3

queueMicrotask(() => console.log(2));
Promise.resolve().then(() => {
  console.log(1);
});
setTimeout(() => console.log(3), 0);
console.log(4);
new Promise(() => console.log(5));
(async () => console.log(6))();

// output: 4, 5, 6, 2, 1, 3