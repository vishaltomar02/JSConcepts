let sayHiMixin = {
  sayHi() {
    console.log(`Hey there, ${this.name}`);
  }
};


class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, sayHiMixin);

const user1 = new User("Vishal");
user1.sayHi();


// Inheritnace in a mixin

let doMixin = {
  do(phrase) {
    console.log(phrase)
  }
}

let doWorkMixin = {
  doWork() {
    super.do(`${this.name} started working on ${this.work}`);
  }
}
Object.setPrototypeOf(doWorkMixin, doMixin);

class Worker {
  constructor(name, work) {
    this.name = name;
    this.work = work;
  }
}

const worker1 = new Worker("John", "repairing the AC");
Object.assign(Worker.prototype, doWorkMixin)
worker1.doWork();