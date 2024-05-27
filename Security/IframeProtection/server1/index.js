const express = require("express");

const PORT = 3020;
const app = express();

app.use((req, res, next) => {
  // res.setHeader(
  //   "Content-Security-Policy",
  //   "default-src 'self';" +
  //   "script-src 'self' 'unsafe-inline'"
  // )
  next();
});
app.use(express.static("public"));

app.get("/example1", (req, res) => {
  res.sendFile(__dirname + "/public/example1.html");
});

app.get("/example2", (req, res) => {
  res.sendFile(__dirname + "/public/example2.html");
});
app.get("/example3", (req, res) => {
  res.sendFile(__dirname + "/public/example3.html");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})
