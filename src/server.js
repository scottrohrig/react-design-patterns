const express = require("express");
const { people, products } = require("./db/list");
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
