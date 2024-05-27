let room = {
  number: 21,
  // We can provide a toJSON method to customise what to retrun after stringifying
  toJSON() {
    return this.number * 2
  }
};

let meet = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room
};

room.occupiedBy = meet; // Circular reference

// console.log(JSON.stringify(meet, function replacer(key, value) {
//   console.log({ key, value });
//   return key === "occupiedBy" ? undefined : value;
// }, 4));


// PARSING 

let json = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}'
// need to provide a reviver function to parse date to date object
let parsedVal = JSON.parse(json, function reviver(key, value) {
  return key === "date" ? new Date(value) : value
});
console.log(parsedVal);

console.log(parsedVal.date.getDate())