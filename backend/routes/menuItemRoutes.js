import express from 'express';
const router = express.Router();
import {
  getMenuItems,
  getMenuItemsById,
  deleteMenuItem,
  updateMenuItem,
  createMenuItem,
} from '../controllers/menuItemController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getMenuItems).post(protect, admin, createMenuItem);
router
  .route('/:id')
  .get(getMenuItemsById)
  .delete(protect, admin, deleteMenuItem)
  .put(protect, admin, updateMenuItem);

export default router;
