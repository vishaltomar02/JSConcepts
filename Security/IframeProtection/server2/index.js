const express = require("express");

const PORT = 3030;
const app = express();

// app.use((req, res, next) => {
//   res.setHeader(
//     "Content-Security-Policy",
//     "frame-ancestors 'self';"
//   )
//   next();
// });
// app.use(express.static("public"));

app.get("/iframe1", (req, res) => {
  res.sendFile(__dirname + "/public/iframe1.html");
});

app.get("/iframe2", (req, res) => {
  res.sendFile(__dirname + "/public/iframe2.html");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})
