let map = new Map();

map.set("1", "str").set(2, "num").set(true, "bool").set("Hey", "Hi")

console.log(map.get("1"))
console.log(map.get(2))
console.log(map.get(true))
console.log(map.get("Hey"))

console.log(Object.is(NaN, NaN));

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  console.log(entry.toString()); // cucumber,500 (and so on)
}

const newMap = new Map([
  ["1", "1"],
  ["bye", "byeee"]
])

//To create a map from object

const obj = {
  "name": "Vishu",
  "age": 28
}

let mapObj = new Map(Object.entries(obj));
console.log(mapObj.get("name"));

const objFromMap = Object.fromEntries(mapObj.entries());

objFromMap.toString = function () {
  let str = '';
  for (let key in this) {
    if (key !== "toString")
      str += " " + key;
  }
  return str;
}
console.log(objFromMap + "");



//////// SET /////////

let set = new Set();

let john = { name: "John" }
let josh = { name: "Josh" }

set.add(josh)
set.add(josh)
set.add(john)

console.log(set.size);



//DESTRUCTURE

function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  console.log(`${title} ${width} ${height}`);
}

showMenu(); // Menu 100 200