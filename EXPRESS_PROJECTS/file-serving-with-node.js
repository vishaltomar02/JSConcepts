const http = require("http");
const { readFileSync } = require("fs");

console.log("express");

//get the files
const htmlFile = readFileSync("./navbar/index.html")
const cssFile = readFileSync("./navbar/styles.css")
const jsFile = readFileSync("./navbar/browser-app.js")
const logo = readFileSync("./navbar/logo.svg")

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  if (req.url === "/") {
    res.writeHead(200, {
      "content-type": "text/html"
    });
    // res.write("<h1> Hello There! </h1>");
    res.write(htmlFile)
    res.end();
  }
  else if (req.url === "/about") {
    res.writeHead(200, {
      "content-type": "text/html"
    });
    res.write("<h1> This is the about page </h1>");
    res.end();
  }
  else if (req.url === "/styles.css") {
    res.writeHead(200, {
      "content-type": "text/css"
    });
    res.write(cssFile);
    res.end();
  }
  else if (req.url === "/browser-app.js") {
    res.writeHead(200, {
      "content-type": "text/javascript"
    });
    res.write(jsFile);
    res.end();
  }
  else if (req.url === "/logo.svg") {
    res.writeHead(200, {
      "content-type": "image/svg+xml"
    });
    res.write(logo);
    res.end();
  }
  else {
    res.writeHead(404, {
      "content-type": "text/html"
    });
    res.write("<h1> NOT FOUND! </h1>");
    res.end();
  }
});

server.listen(3001)