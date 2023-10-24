const express = require('express');
const cors = require('cors');
const todoRoutes = require('./src/routes/todoRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); 
app.use(todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
