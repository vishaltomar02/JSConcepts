/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
  let promiseResult = Array.from({ length: iterable.length }, () => {
    null
  });
  return new Promise((resolve, reject) => {
    if (!iterable.length) resolve([]);
    for (let i = 0; i < iterable.length; i++) {
      let currPromise = iterable[i];
      if (!(currPromise instanceof Promise)) {
        try {
          currPromise = Promise.resolve(currPromise);
        }
        catch (err) {
          currPromise = Promise.reject(new Error("Something went wrong!"));
        }
      }
      currPromise.then((res) => {
        console.log(currPromise, res, Date.now(), i);
        promiseResult[i] = res;
        promiseResult.every((promiseResolved) => promiseResolved) ? resolve(promiseResult) : null
      }, (err) => reject(err));
    }
  })
}



const p0 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 200);
});
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
  }, 100);
});
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3);
  }, 10);
});

const res = await promiseAll([p0, p1, p2]);
console.log(res)
