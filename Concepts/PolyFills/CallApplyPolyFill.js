function customCall(context, ...params) {
  context = context || globalThis;
  const originFnSymbol = Symbol();
  context[originFnSymbol] = this;

  let result = context[originFnSymbol](...params);
  delete context[originFnSymbol];
  return result;
}

function customApply(context, arrArgs) {
  context = context || globalThis;
  const originalFnSymbol = Symbol();
  context[originalFnSymbol] = this;

  let result;

  if (Array.isArray(arrArgs)) {
    result = context[originalFnSymbol](...arrArgs);
  }
  else {
    result = context[originalFnSymbol]();
  }
  delete context[originalFnSymbol];
  return result;
}

function greet() {
  console.log("name", this.name);
  return this.name
}

const obj = {
  name: "Vishu"
};

Function.prototype.customCall = customCall;
Function.prototype.customApply = customApply;

console.log(greet.customCall(obj, "Tomar"));
console.log(greet.customApply(obj, ["Tomar"]));