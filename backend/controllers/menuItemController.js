import asyncHandler from 'express-async-handler';
import MenuItem from '../models/menuItemModel.js';

// @desc    Fetch all items
// @router  GET /api/menuItems
// @access  Public
const getMenuItems = asyncHandler(async (req, res) => {
  const menuItems = await MenuItem.find({});
  res.json(menuItems);
});

// @desc    Fetch single item
// @router  GET /api/menuItems/:id
// @access  Public
const getMenuItemsById = asyncHandler(async (req, res) => {
  const menuItem = await MenuItem.findById(req.params.id);

  if (menuItem) {
    res.json(menuItem);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getMenuItems, getMenuItemsById };
