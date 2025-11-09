// Import the Express module
const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files (like HTML, CSS, JS)
app.use(express.static('public'));

// Define a simple route
app.get('/hello', (req, res) => {
  res.send('Hello from Node.js!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

