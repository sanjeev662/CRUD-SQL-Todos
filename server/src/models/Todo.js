const db = require('../db');

const createTodoSchema = () => {
  const todoSchema = `
    CREATE TABLE IF NOT EXISTS todos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`;

  db.query(todoSchema, (error, results) => {
    if (error) throw error;
    console.log('Todos table created or already exists');
  });
};

module.exports = createTodoSchema;
