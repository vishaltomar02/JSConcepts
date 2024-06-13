var studentName = "Vishal";

function hello() {
  console.log(studentName);
}

global.hey = "hey"
console.log(globalThis.studentName, hey);  //undefined
hello();

console.log(hello.name);

//Node defines a number of "globals" like require(), but they're not actually identifiers in the global scope (nor properties of the global object). They're injected in the scope of every module, essentially a bit like the parameters listed in the Module(..) function declaration.


askQuestion();
// ReferenceError

let stu = "Vishu";

function askQuestion() {
  console.log(`${stu}, do you know?`);
}

// Another example

var newStu = "Kyle";

{
  console.log(newStu);
  // ???

  // ..

  let newStu = "Suzy";

  console.log(newStu);
  // Suzy
}