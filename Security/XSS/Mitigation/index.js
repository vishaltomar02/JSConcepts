const express = require("express");

const PORT = 3010;
const app = express();

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self';" +
    "script-src 'self' 'unsafe-inline' 'nonce-allowedKey' https://random.com"
  )
  next();
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("started")
  res.sendFile(__dirname + "/index.html");
})
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})
