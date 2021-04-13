const express = require("express");
const app = express();
const users = require("./users.json");
const PORT = 5000;

const { accessController } = require("./middleware");
// app.use(accessController); //! All EndPoints
app.use(express.json());

app.get("/users", accessController, (req, res, next) => {
  res.json({
    success: true,
    data: users,
  });
  res.json(users);
});

app.put("/users/:id", (req, res, next) => {
  const id = Number(req.params.id);
  console.log(users.length);
  for (let i = 0; i < users.length; i++) {
    console.log(id, users[i], users[id], req.body);
    if (id === users[i].id) {
      users[i] = {
        ...users[i],
        ...req.body,
      };
    }
  }
  res.json({
    success: true,
    type: "put",
    data: users,
  });
  console.log(users);
});

app.post("/users", (req, res, next) => {
  users.push(req.body);
  res.json({
    success: true,
    data: users,
  });
});

app.listen(PORT, () => {
  console.log("Server Started!");
});
