import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import menuItems from './data/menuItems.js';
import User from './models/userModel.js';
import MenuItem from './models/menuItemModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await MenuItem.deleteMany();
    await User.deleteMany();
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleMenuItems = menuItems.map((menuItem) => {
      return { ...menuItem, user: adminUser };
    });
    await MenuItem.insertMany(sampleMenuItems);
    console.log('Data imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`$[error]`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await MenuItem.deleteMany();
    await User.deleteMany();
    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`$[error]`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
