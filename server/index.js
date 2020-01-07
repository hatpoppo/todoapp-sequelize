const express = require("express");
const app = express();
const cors = require("cors");
var models = require("../models");

app.use(express.json());
app.use(cors());

app.get("/todos", (req, res) => {
  models.todos.findAll({}).then(data => {
    const obj = {};
    data.forEach(element => {
      const rec = {};
      rec.label = element.label;
      rec.completed = element.completed;
      obj[element.index] = rec;
    });
    res.json(obj);
  });
});

app.put("/todos/:id", (req, res) => {
  models.todos.update(
    {
      label: req.body.label,
      completed: req.body.completed
    },
    { where: { index: req.params.id } }
  );
  res.json("ok");
});

app.post("/todos/:id", (req, res) => {
  models.todos.create({
    index: req.params.id,
    label: req.body.label,
    completed: req.body.completed
  });
  res.json("ok");
});

app.delete("/todos/:id", (req, res) => {
  models.todos.destroy({
    where: { index: req.params.id }
  });
});

app.post("/todos", (req, res) => {
  models.todos.truncate();
  const array = Object.keys(req.body);
  array.forEach(index => {
    console.log(req.body[index]);
    models.todos.create({
      index: index,
      label: req.body[index].label,
      completed: req.body[index].completed
    });
  });
  res.json("ok");
});

app.get("/hello", (req, res) => {
  const response = { key: "Hello" };
  res.json(response);
});

models.sequelize.sync().then(() => {
  app.listen(4000),
    () => {
      console.log("Listening as http://localhost:4000");
    };
});
