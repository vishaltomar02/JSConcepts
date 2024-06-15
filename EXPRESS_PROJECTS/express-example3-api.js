const express = require("express");
const app = express();

const { products } = require("./data.js")

app.get("/", (req, res) => {
  // res.json(products);
  res.send("<h1>Home page</h1><a href='/api/products'>Products</a>")
});

app.get("/api/products", (req, res) => {
  const respToSend = products.map((item) => ({
    name: item.name,
    id: item.id
  }));
  res.json(respToSend)
});

app.get("/api/products/:productId", (req, res) => {
  console.log(req.params);
  const product = products.find((item) => item.id == req.params.productId);
  if (product) res.json(product);
  else res.status(404).send("No Product found")
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  // res.send("Hello World");

  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((item) => item.name.startsWith(search));
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, +limit)
  }
  if (!sortedProducts.length) return res.status(200).json({
    "success": true,
    "data": []
  })
  res.json(sortedProducts)
})

app.listen(3001, () => console.log("server is running at port 3001"))