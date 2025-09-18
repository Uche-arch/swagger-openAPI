const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();
app.use(express.json());

// To load the YAML Swagger file
const swaggerDocument = YAML.load("./swagger.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));



let todos = [{ id: 1, task: "Learn Swagger", done: false }];

// GET route
app.get("/todos", (req, res) => {
  res.json(todos);
});

// POST route
app.post("/todos", (req, res) => {
  const newTodo = { id: todos.length + 1, task: req.body.task, done: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// DELETE route
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((todo) => todo.id === id);

  if (index !== -1) {
    todos.splice(index, 1);
    return res.json({ message: `Todo ${id} deleted successfully` });
  }

  res.status(404).json({ error: "Todo not found" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
  console.log("Swagger docs available at http://localhost:3000/api-docs");
});
