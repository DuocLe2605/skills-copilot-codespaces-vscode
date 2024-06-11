// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a new comment
app.post('/comments', (req, res) => {
  res.send('Comment created');
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  res.send('Comment updated');
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  res.send('Comment deleted');
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});