const express = require("express");
const { people, products } = require("./src/db/list");
const app = express();
app.use(express.json());

let currentUser = people[0];
let users = people;

app.get("/current-user", (req, res) => {
  const { id } = req.params;
  res.json(users.find((user) => user.id === id));
});
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const { user: updatedUser } = req.body;

  users = users.map((user) => (user.id === id ? updatedUser : user));

  res.json(users.find((user) => user.id === id));
});
app.post("/users/:id", (req, res) => {
  const { id } = req.params;
  const { user: updatedUser } = req.body;

  users = users.map((user) => (user.id === id ? updatedUser : user));

  res.json(users.find((user) => user.id === id));
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/product/:id", (req, res) => {
  const { id } = req.params;
  res.json(products.find((product) => product.id === id));
});

app.post("/product/:id", (req, res) => {
  const { id } = req.params;
  const { product: updatedProduct } = req.body;
  products = products.map((product) =>
    product.id === id ? updatedProduct : product
  );
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
