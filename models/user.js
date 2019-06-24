const mongoose = require('mongoose');
const Store = require('./store.js');
const Product = require('./product.js');

const userSchema = new mongoose.Schema({
  title: String,
  stores: [Store.schema],
  rating: Number, // rating of the user and his products
  reviews: [String],
  password: String,
  username: String,
  email: String,
  country: String,
  age: Number,
  cart: [Product.schema],
});

module.exports = mongoose.model('User', userSchema);
