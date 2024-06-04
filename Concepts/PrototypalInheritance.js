const animal = {
  eats: true,
  walks: true
}

const rabbit = {
  jumps: true
}

rabbit.__proto__ = animal;

console.log(Object.getOwnPropertyDescriptors(rabbit));
console.log(rabbit.eats);


////// Another example

const phone = {
  camera: true,
  calling: true,
  messaging: true
}

const android = Object.create(phone);
android.OS = "android";

//console.log(android.camera);


// Example to demonstrate behavior of this in prototypal inheritance
const speakers = {
  sound: true,
  maxVol: 100,
  minVol: 0,
  switchSpeaker: function () {
    this.on = !this.on
  }
}

const headphones = {
  __proto__: speakers,
  overEar: true
}

headphones.switchSpeaker();
console.log(headphones.on, speakers.on);
headphones.switchSpeaker();
console.log(headphones, speakers);


{
  let animal = {
    eats: true
  };

  function Rabbit(name) {
    this.name = name;
  }

  Rabbit.prototype = animal;

  let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

  console.log(rabbit.eats); // true
}
//Setting Rabbit.prototype = animal literally states the following: "When a new Rabbit is created,
//assign its [[Prototype]] to animal".

// Every function has by default a prototype property which has a "constructor" property on it which point to the function itself

function Fruits(name) {
  this.name = name;
};
console.log("Fruits prototype", Fruits.prototype.constructor == Fruits);
const mango = new Fruits("MANGO");
console.log(mango.constructor, mango.name);

const apple = new mango.constructor("APPLE");
console.log(apple.name)

//////
let obj = {};

console.log(obj.__proto__ === Object.prototype); // true

console.log(obj.toString === obj.__proto__.toString); //true
console.log(obj.toString === Object.prototype.toString); //true



function f(a, b) {
  console.log(a, b)
  console.log(a + b);
}

Function.prototype.defer = function defer(ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
}

f.defer(1000)(1, 2);



/// Dictonary Example
let dictionary = Object.create(null, {
  toString: {
    value: function () {
      let string = "";
      for (let key in this) {
        string += key + ",";
      }
      return string;
    }
  }
});
// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for (let key in dictionary) {
  console.log(key); // "apple", then "__proto__"
}

// your toString in action
console.log(dictionary + ""); // "apple,__proto__"

{
  function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function () {
    console.log(this.name, this);
  };

  let rabbit = new Rabbit("Rabbit");
  rabbit.sayHi();
  Rabbit.prototype.sayHi();
  Object.getPrototypeOf(rabbit).sayHi();
  rabbit.__proto__.sayHi();
  console.log(Rabbit.prototype, rabbit.__proto__)

  // Only the first call will give "Rabbit", other ones will give undefined as the object before "." is different
}