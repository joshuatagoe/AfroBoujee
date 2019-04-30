const mongoose = require('mongoose') ;
var Store = require('./store.js');
var Product = require('./product.js');
const userSchema = new mongoose.Schema({
    title : String,
    stores: [Store.schema],
    rating: Number, //rating of the user and his products
    reviews : [String],
    password: String,
    username: String,
    email: String,
    cart: [Product.schema]

})

module.exports = mongoose.model('User', userSchema);