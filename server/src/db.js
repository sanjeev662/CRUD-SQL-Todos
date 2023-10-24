const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
  } else {
    console.log('Connected as ID ' + db.threadId);
    // Execute a test query to check the connection
    db.query('SELECT 1', (error, results, fields) => {
      if (error) {
        console.error('Error executing query:', error);
      } else {
        console.log('Test query executed successfully:', results);
        // Database is connected and responding properly
      }
    });
  }
});

module.exports = db;
