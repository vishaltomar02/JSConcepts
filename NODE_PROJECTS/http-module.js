const { readFile } = require("fs").promises;
const fs = require("fs");
const http = require("http");

const server = http.createServer(async (req, res) => {
  const readStream = fs.createReadStream("./content/subfolder/big.txt", "utf8");
  readStream.on("open", () => {
    readStream.pipe(res);
  })
  readStream.on("error", (err) => {
    res.end(err)
  })
  // if (req.url === "/") {
  //   res.end("Welcome to the home page");
  //   const text = await readFile("./content/subfolder/big.txt", "utf8");
  //   res.end(text);
  // }
  // if (req.url === "/about") res.end("Welcome to the about page");
  // else res.end(`
  //   <h1>OOPS!</h1>
  //   <p>We can't seem to find your page</p>
  //   `);
});

server.listen(3000, () => {
  console.log("server listening on port 3000")
});