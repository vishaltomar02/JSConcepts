
import fetch from "node-fetch";
import https from "https";

function delay(ms) {
  return new Promise((res, rej) => {
    setTimeout(() => res("done"), ms);
  });
}

delay(1000).then((res) => console.log(res));

// Thenable object example

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    console.log(resolve);
    setTimeout(() => resolve(this.num * 2), 1000)
  }
}

new Promise((resolve, reject) => resolve(1))
  .then(result => new Thenable(10))
  .then(console.log);


const agent = new https.Agent({
  rejectUnauthorized: false
})

fetch("https://jsonplaceholder.typicode.com/posts", { agent })
  .then(res => res.json())
  .then(posts => fetch(`https://jsonplaceholder.typicode.com/posts/${posts[0].id}`, { agent }))
  .then(postJson => postJson.json())
  .then(post => setTimeout(() => console.log(post), 1000))
  .catch(err => console.log("Message:", err.message));



// In order to catch unhandled rejections

// window.addEventListener("unhandledRejection", function (event) {
//   console.log(event.promise);
//   console.log(event.reason);
// });

// new Promise((resolve, reject) => { throw new Error("Whoops!"); });

// Below code wont work as the error wont get in the catch block because the hidden try catch is wrapper around the original executor function
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     throw new Error("Whoops!");
//   }, 1000);
// }).catch((err) => console.log(err.message));


// Promise.all

Promise.all([
  new Promise((res, req) => setTimeout(() => res(1), 300)),
  new Promise((res, req) => setTimeout(() => res(2), 200)),
  new Promise((res, req) => setTimeout(() => res(3), 100)),
])
  .then((result) => console.log(result));

Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch((err) => console.log(err.message));


Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 250)
  }),
  2,
  4
])
  .then((result) => console.log(result));


// Promise.allSettled


let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then((results) => {
    results.forEach((result, num) => {
      if (result.status === "fulfilled") {
        console.log(`${urls[num]}: ${result.value}`)
      }
      else if (result.status === "rejected") {
        console.log(`${urls[num]}: ${result.reason}`)
      }
    });
  });


//PolyFill for allSettled

if (!Promise.allSettled) {
  const rejectHandler = result => ({ status: "rejected", reason: result });
  const resolveHandler = result => ({ status: "fulfilled", value: result });

  Promise.allSettled = (promises) => {
    const convertedPromises = promises.map(promise => Promise.resolve(promise).then(resolveHandler, rejectHandler));
    return Promise.all(convertedPromises);
  }
}

// Promise.race --> This method will return once the first promise is fulfilled with result or error
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1


// Promisification Helper function

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, result) {
        if (err) {
          reject(err);
        }
        else {
          resolve(result);
        }
      }
      args.push(callback);
      fn.call(this, ...args)
    });
  };
};

let promisified = promisify(someFunction);
promisified().then();