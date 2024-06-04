function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

let generator = generateSequence();

let one = generator.next();

console.log(one);


// making iterables using generator functions

let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    // Below code works as the iterator expects a next method which returns an object with value and
    //done property and this is exactly what a generator method does
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
}


for (let value of range) {
  console.log(value)
}

// we can also do
console.log([...range]);


// GENERATOR COMPOSITION

function* generateCharSequence(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  };
};

function* generatePassCodes() {
  yield* generateCharSequence(48, 57);
  yield* generateCharSequence(65, 90);
  yield* generateCharSequence(97, 122);
}

let str = "";

for (let code of generatePassCodes()) {
  str += String.fromCharCode(code);
}

console.log(str);


function* gen() {
  let ask1 = yield "2 + 2 = ?";
  console.log(ask1);

  let ask2 = yield "3 * 3 = ?";
  console.log(ask2);
}

let generator1 = gen();

console.log(generator1.next().value);
console.log(generator1.next(4).value);
console.log(generator1.next(9).done);