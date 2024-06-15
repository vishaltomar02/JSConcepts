const express = require("express");
const app = express();

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = Date.now();

  console.log(method, url, time);
  next();
}

const authorised = (req, res, next) => {
  console.log("authorised");
  next();
}

app.use([authorised, logger])
app.get("/", (req, res) => {
  res.send("Home")
});
app.get("/about", (req, res) => {
  res.send("About")
});

app.listen(3001, () => console.log("server is running at port 3001"))