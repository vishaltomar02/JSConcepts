const path = require("path");

console.log(path.sep);

const filepath = path.join("/content", "subfolder", "text.txt")
console.log(filepath);

const basename = path.basename(filepath);
console.log("basename: ", basename);

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute)