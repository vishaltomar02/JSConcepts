const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/subfolder/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "utf8");

console.log(first, second);

for (let i = 0; i < 1000; i++) {
  writeFileSync(
    "./content/subfolder/result.txt",
    `Hello this is the result file: ${first} ${second} \n`,
    { flag: "a" }
  )
}

for (let i = 0; i < 10000; i++) {
  writeFileSync(
    "./content/subfolder/big.txt",
    `Hello this is the big file: ${first} ${second} \n`,
    { flag: "a" }
  )
}
