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
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    item: {
      type: String,
    },
    extra_toppings: {
      type: String,
    },
    text: {
      type: String,
    },
    ingredients: {
      type: String,
    },
    size: {
      type: String,
    },
    sizeMd: {
      type: String,
    },
    sizeLg: {
      type: String,
    },
    sizeXl: {
      type: String,
    },
    qty: {
      type: Number,
    },
    price: {
      type: Number,
    },
    halfSize: {
      type: Boolean,
    },
    toppings: {
      extraSauce: { type: Boolean },
      liteSauce: { type: Boolean },
      tomatoe: { type: Boolean },
      sausage: { type: Boolean },
      beef: { type: Boolean },
      pepperoni: { type: Boolean },
      ham: { type: Boolean },
      bacon: { type: Boolean },
      chicken: { type: Boolean },
      onion: { type: Boolean },
      greenpepper: { type: Boolean },
      mushroom: { type: Boolean },
      pineapple: { type: Boolean },
      peppercini: { type: Boolean },
      bananapepper: { type: Boolean },
      blackolive: { type: Boolean },
      extraCheese: { type: Boolean },
      hamburger: { type: Boolean },
      jalapeno: { type: Boolean },
      shrimp: { type: Boolean },
      double: { type: Boolean },
      ranch: { type: Boolean },
      honeyMustard: { type: Boolean },
      blueCheese: { type: Boolean },
      hotSauce: { type: Boolean },
      bbqSauce: { type: Boolean },
      ketchup: { type: Boolean },
      extras: { type: Boolean },
      marinara: { type: Boolean },
      garlic: { type: Boolean },
      cheese: { type: Boolean },
      lettuce: { type: Boolean },
      lettuce: { type: Boolean },
      pickle: { type: Boolean },
      mustard: { type: Boolean },
      aujus: { type: Boolean },
      cold: { type: Boolean },
      bacon: { type: Boolean },
      italianDressing: { type: Boolean },
      thousandIslandDressing: { type: Boolean },
      frenchDressing: { type: Boolean },
      blueCheese: { type: Boolean },
      croutons: { type: Boolean },
    },
  },
  {
    timestamps: true,
  }
);

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

export default MenuItem;
