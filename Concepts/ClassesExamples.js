//In object - oriented programming, a class is an extensible program - code - 
//template for creating objects, providing initial values for state(member variables) 
//and implementations of behavior(member functions or methods).

class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// proof: User is a function
console.log(typeof User); // function


class Button {
  constructor(value) {
    this.value = value;
  }
  click() {
    console.log("clicked", this, this.value);
  }
}

const button = new Button("submit");
button.click();
setTimeout(button.click, 100);



// CLOCK EXAMPLE
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { ticks = 1000 } = options;
    this.ticks = ticks;
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.ticks);
  }
}

const newClock = new ExtendedClock({
  template: 'h:m:s',
  ticks: 2000
});
newClock.start();



////// Article Class
class Article {
  constructor(title, date) {
    this.date = date;
    this.title = title;
  }
  static createTodaysArticle() {
    return new this("New Article", new Date());
  }
}

const article = Article.createTodaysArticle();
console.log(article)

// console.log(Object.prototype, Object.__proto__, Function.prototype, Function.__proto__)

function Parent(par) {
  this.type = par;
  this.printParent = function () {
    console.log("inside parent", this.type)
  }
}

const child = new Parent("dad");
console.log(child.printParent(), Parent.__proto__ === Function.prototype);


// Example for private and public fields and methods

class Coffee {
  _waterAmount = 0;
  #waterLimit = 100;
  get waterAmount() {
    return this._waterAmount;
  }

  set waterAmount(amount) {
    if (amount < 0) amount = 0;
    if (amount > this.#waterLimit) amount = this.#waterLimit
    this._waterAmount = amount;
  }

  constructor(power) {
    this._power = power + "W";
    console.log(`Coffee machine created with power: ${this._power}`);
  }

  get power() {
    return this._power;
  }

}

let coffeeMachine = new Coffee(120);

coffeeMachine.waterAmount = -200;
console.log(coffeeMachine.waterAmount);
coffeeMachine.waterAmount = 200;

console.log(coffeeMachine.waterAmount, coffeeMachine.power);


// EXTENDING BUILT IN CLASSES

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // we can change the constructor to build new entities from array methods using below getter or it will default to constructor property of array
  // static get [Symbol.species]() {
  //   return Array;
  // }
}

let arr = new PowerArray(1, 2, 3, 5);
let filteredArr = arr.filter(item => item < 2);
console.log(filteredArr.isEmpty(), arr.constructor);


class Animal { }
class Rabbit extends Animal { }

let rabbit = new Rabbit();
console.log("animal class", Rabbit.prototype.__proto__ === Animal.prototype); 