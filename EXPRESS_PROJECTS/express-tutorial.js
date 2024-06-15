const express = require("express");

const app = express();

//app.get
// app.post
// app.delete
// app.put
// app.use
// app.all
// app.listen

app.get("/", (req, res) => {
  res.send("home page of Express")
});

app.get("/about", (req, res) => {
  res.send("About page")
});

app.all("*", (req, res) => res.status(404).send("<h1>Not Found</h1>"))

app.listen(3002, () => {
  console.log("server is listening on port 5001")
})
