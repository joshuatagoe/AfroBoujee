const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Store = require('./store.js');
const Product = require('./product.js');

const userSchema = new mongoose.Schema({
  title: String,
  stores: [Store.schema],
  rating: Number, // rating of the user and his products
  reviews: [String],
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email:  {
    type: String,
    required: true
  },
  country:  {
    type: String,
    required: true
  },
  age: Number,
  cart: [Product.schema],
});


userSchema.methods.hashPassword = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));

}

userSchema.methods.comparePassword = function(password, hash){
  return bcrypt.compareSync(password, hash);

}


module.exports = mongoose.model('User', userSchema);
