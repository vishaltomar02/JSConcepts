const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public"));
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar/index.html"))
// });
app.get("*", (req, res) => {
  res.status(404).send("Resourcer not found")
});


app.listen("3001", () => console.log("Server is running on port 3001"))