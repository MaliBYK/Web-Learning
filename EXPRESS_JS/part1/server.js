const express = require("express");
const app = express();
const PORT = 5000;

const users = require("./users.json");

app.get("/users", (req, res, next) => {
  res.json(users);
});
app.listen(PORT, () => {
  console.log("Server Started!");
});
