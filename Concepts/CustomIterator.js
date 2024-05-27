let range = {
  from: 1,
  to: 5
};

// We want the for..of to work:
// for(let num of range) ... num=1,2,3,4,5

//Symbol.iterator is used

// When for..of starts, it calls that method once(or errors if not found).
// The method must return an iterator – an object with the method next.
//  Onward, for..of works only with that returned object.
// When for..of wants the next value, it calls next() on that object.
// The result of next() must have the form { done: Boolean, value: any },
//where done = true means that the loop is finished, otherwise value is the next value.

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ }
      }
      else {
        return { done: true }
      }
    }
  }
}

for (let num of range) {
  console.log(num);
}