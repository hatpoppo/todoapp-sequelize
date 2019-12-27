const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

const store = {
  read() {
    if (fs.existsSync("tmp.json")) {
      store.todos = JSON.parse(fs.readFileSync("tmp.json").toString());
    } else {
      store.todos = {};
    }
    return store.todos;
  },

  save() {
    fs.writeFileSync("tmp.json", JSON.stringify(store.todos));
  },
  todos: {}
};
app.use(express.json());
app.use(cors());

app.get("/todos", (req, res) => {
  res.json(store.read());
});

app.put("/todos/:id", (req, res) => {
  store.todos[req.params.id] = req.body;
  store.save();
  res.json("ok");
});

app.post("/todos/:id", (req, res) => {
  store.todos[req.params.id] = req.body;
  store.save();
  res.json("ok");
});

app.delete("/todos/:id", (req, res) => {
  delete store.todos[req.params.id];
});

app.post("/todos", (req, res) => {
  store.todos = req.body;
  store.save();
  res.json("ok");
});

app.get("/hello", (req, res) => {
  const response = { key: "Hello" };
  res.json(response);
});
app.listen(4000),
  () => {
    console.log("Listening as http://localhost:4000");
  };
