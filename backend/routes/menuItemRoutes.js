import express from 'express';
import asynchHandler from 'express-async-handler';
const router = express.Router();
import MenuItem from '../models/menuItemModel.js';

// @desc    Fetch all items
// @router  GET /api/products
// @access  Public
router.get(
  '/',
  asynchHandler(async (req, res) => {
    const menuItems = await MenuItem.find({});
    res.json(menuItems);
  })
);

// @desc    Fetch single item
// @router  GET /api/menuItems/:id
// @access  Public
router.get(
  '/:id',
  asynchHandler(async (req, res) => {
    const menuItem = await MenuItem.findById(req.params.id);

    if (menuItem) {
      res.json(menuItem);
    } else {
      res.status(404).json({ message: 'Menu Item not found' });
    }
  })
);

export default router;
