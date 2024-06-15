const EventEmitter = require("events");

const customEventEimtter = new EventEmitter();

customEventEimtter.on("response", (name, age) => {
  console.log(`data recieved: Name: ${name}, Age: ${age}`)
})
customEventEimtter.on("response", () => {
  console.log(`other data recieved`)
})

customEventEimtter.emit("response", "Vishal", 28)
customEventEimtter.emit("response", "Vishu", 28)