import express from 'express';
const router = express.Router();
import {
  getMenuItems,
  getMenuItemsById,
} from '../controllers/menuItemController.js';

router.route('/').get(getMenuItems);
router.route('/:id').get(getMenuItemsById);

export default router;
