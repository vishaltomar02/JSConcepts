"use strict"
const obj = {
  name: "Vishal"
}

console.log(Object.getOwnPropertyDescriptor(obj, "name"))

Object.defineProperty(obj, "name", {
  writable: false,
  configurable: false
});
obj.name = "Vishu"