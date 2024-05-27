let worker = {
  slow(min, max) {
    console.log(`Called with ${min},${max}`, min + max);
    return min + max;
  }
};

// decorator function below

function cacheDecorator(fn, hash) {
  const cacheMap = new Map();

  return function () {
    const cacheKey = hash(...arguments);
    let result = null;
    if (cacheMap.has(cacheKey)) {
      result = cacheMap.get(cacheKey);
      console.log("cached response");
    }
    else {
      result = fn.apply(this, arguments);
      cacheMap.set(cacheKey, result);
    }
    return result;
  }
}

function hash() {
  console.log(arguments)
  return Object.values(arguments).reduce((acc, curr) => acc += `,${curr}`, "");
}

worker.slow = cacheDecorator(worker.slow, hash);

worker.slow(1, 3)
worker.slow(1, 4)
worker.slow(5, 8)