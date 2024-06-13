const { readFile, writeFile } = require("fs");

console.log("starting")
readFile("./content/subfolder/first.txt", "utf8", (err, result) => {
  if (err) {
    console.warn("err: ", err);
    return;
  }
  console.log("first: ", result);
  const first = result;
  readFile("./content/subfolder/second.txt", "utf8", (err, result) => {
    if (err) {
      console.warn("err: ", err);
      return;
    }
    console.log("second: ", result);
    const second = result;
    writeFile(
      "./content/subfolder/result-async.txt",
      `Here is the async result: ${first}, ${second}`,
      (err, result) => {
        if (err) return;
        console.log(result);
        console.log("done with the task");
      }
    )
  });
})

console.log("starting new task")