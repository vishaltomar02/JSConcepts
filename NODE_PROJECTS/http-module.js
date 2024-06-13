const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Welcome to the home page");
  if (req.url === "/about") res.end("Welcome to the about page");
  else res.end(`
    <h1>OOPS!</h1>
    <p>We can't seem to find your page</p>
    `);
});

server.listen(3000);