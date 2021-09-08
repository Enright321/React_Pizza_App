import mongoose from 'mongoose';

const menuItemSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    item: {
      type: String,
      required: true,
    },
    extra_toppings: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    ingredients: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: false,
    },
    qty: {
      type: Number,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

export default MenuItem;
