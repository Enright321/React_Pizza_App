import dotenv from 'dotenv';
import express from 'express';
// const menuItems = require('./data/menuItems.js');
import connectDB from './config/db.js';
import menuItems from './data/menuItems.js';
import colors from 'colors';
import menuItemRoutes from './routes/menuItemRoutes.js';
const app = express();
dotenv.config();
connectDB();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/menuItems', menuItemRoutes);

app.get('/api/menuItems', (req, res) => {
  res.json(menuItems);
});

app.get('/api/menuItems/:id', (req, res) => {
  const menuItem = menuItems.find((p) => p._id === req.params.id);
  res.json(menuItem);
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
