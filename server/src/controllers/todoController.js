const db = require("../db");

// Controller function to get all todos
const getTodos = (req, res) => {
  const query = "SELECT * FROM todos";
  db.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: "Server error" });
    } else {
      res.json(results);
    }
  });
};

// Controller function to create a new todo
const addTodo = (req, res) => {
  const { title, description } = req.body;
  const query = "INSERT INTO todos (title, description) VALUES (?, ?)";
  db.query(query, [title, description], (error, results) => {
    if (error) {
      res.status(500).json({ error: "Server error" });
    } else {
      res.json({ id: results.insertId, title, description });
    }
  });
};

// Controller function to update a todo
const updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const query = "UPDATE todos SET title = ?, description = ? WHERE id = ?";
  db.query(query, [title, description, id], (error, results) => {
    if (error || results.affectedRows === 0) {
      res.status(404).json({ error: "Todo not found" });
    } else {
      res.json({ id, title, description });
    }
  });
};

// Controller function to delete a todo
const deleteTodo = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM todos WHERE id = ?";
  db.query(query, [id], (error, results) => {
    if (error || results.affectedRows === 0) {
      res.status(404).json({ error: "Todo not found" });
    } else {
      res.json({ message: "Todo deleted successfully" });
    }
  });
};

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};




