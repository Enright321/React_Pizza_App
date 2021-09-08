const express = require('express');
const menuItems = require('./data/menuItems');
const app = express();
app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/menuItems', (req, res) => {
  res.json(menuItems);
});

app.get('/api/menuItems/:id', (req, res) => {
  const menuItem = menuItems.find((p) => p._id === req.params.id);
  res.json(menuItem);
});

const PORT = 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
