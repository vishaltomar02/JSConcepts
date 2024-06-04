class CustomPromise {
  promiseState = {
    state: "pending",
    result: undefined,
  }
  #resolvingHandlers = [];
  #rejectingHandlers = [];
  constructor(executorFunction) {
    this.executor = executorFunction;
    this.executor(this.resolver.bind(this), this.rejector.bind(this));
  }
  resolver(result) {
    Object.defineProperty(this, "promiseState", {
      value: {
        state: "fulfilled",
        result
      },
      writeable: false,
      configurable: false
    });
    this.#resolvingHandlers.forEach((handler) => handler(this.promiseState.result))

  }
  rejector(reason) {
    Object.defineProperty(this, "promiseState", {
      value: {
        state: "fulfilled",
        result: reason
      },
      writeable: false,
      configurable: false
    })
    this.#rejectingHandlers.forEach((handler) => handler(this.promiseState.result))
  }

  then(resultHandler, errorHandler) {
    if (resultHandler) {
      this.#resolvingHandlers.push(resultHandler);
    }
    if (errorHandler) {
      this.#rejectingHandlers.push(errorHandler);
    }
    return this;
  }

  catch(errorHandler) {
    if (errorHandler) {
      this.#rejectingHandlers.push(errorHandler);
    }
    return this;
  }


  // STATIC METHODS
  static resolve(value) {
    return new CustomPromise((resolve) => resolve(value));
  }
  static reject(value) {
    return new CustomPromise((_, reject) => reject(value));
  }
  static all(promises = []) {
    const promiseResult = [];
    let isEveryFulfilled = false;
    const allPromise = new CustomPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        const currPromise = promises[i];
        if (!(currPromise instanceof CustomPromise)) {
          promiseResult.push(CustomPromise.resolve(currPromise));
        }
        else {
          promiseResult.push(currPromise);
          currPromise.then((res) => {
            // CHECK IF EVERY PROMISE IS FULFILLED OR NOT
            isEveryFulfilled = promiseResult.every((promise) => {
              return promise.promiseState.state === "fulfilled";
            });
            isEveryFulfilled ? resolve(promiseResult.map((item) => item.promiseState.result)) : null;
          }, (err) => {
            reject(err);
          });
        }
      }

    });
    return allPromise;
  }
}

// const newPromise = new CustomPromise((resolve, reject) => setTimeout(() => resolve(1), 1000));
// newPromise.then((res) => console.log(res));
// console.log(newPromise);

const initialTime = Date.now();
const multiplePromises = CustomPromise.all([
  new CustomPromise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  3,
  new CustomPromise((resolve, reject) => setTimeout(() => reject(2), 1000)),
  4
]);
multiplePromises
  .then((result) => console.log("all Promise Result:", result, Date.now() - initialTime))
  .catch((err) => console.log(err));
