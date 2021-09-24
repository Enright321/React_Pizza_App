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

// @desc    Delete an item
// @router  DELETE /api/menuItems/:id
// @access  Private/Admin
const deleteMenuItem = asyncHandler(async (req, res) => {
  const menuItem = await MenuItem.findById(req.params.id);

  if (menuItem) {
    await menuItem.remove();
    res.json({ message: 'Item Removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Create an item
// @router  POST /api/menuItems
// @access  Private/Admin
const createMenuItem = asyncHandler(async (req, res) => {
  const menuItem = new MenuItem({
    name: 'Sample Name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    description: 'sample description',
  });

  const createdMenuItem = await menuItem.save();
  res.status(201).json(createdMenuItem);
});

// @desc    Update an item
// @router  PUT /api/menuItems/:id
// @access  Private/Admin
const updateMenuItem = asyncHandler(async (req, res) => {
  const { name, price, description, image } = req.body;

  const menuItem = await MenuItem.findById(req.params.id);

  if (menuItem) {
    menuItem.name = name;
    menuItem.price = price;
    menuItem.description = description;
    menuItem.image = image;

    const updatedMenuItem = await menuItem.save();
    res.json(updatedMenuItem);
  } else {
    res.status(404);
    throw new Error('Menu Item not found');
  }
});

export {
  getMenuItems,
  getMenuItemsById,
  deleteMenuItem,
  createMenuItem,
  updateMenuItem,
};
