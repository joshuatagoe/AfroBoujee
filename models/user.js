const mongoose = require('mongoose') ;
var Store = require('./store.js');

const userSchema = new mongoose.Schema({
    title : String,
    stores: [Store.schema],
    rating: Number, //rating of the user and his products
    reviews : [String],
    password: String,
    username: String,
    email: String

})

module.exports = mongoose.model('User', userSchema);