const mongoose = require('mongoose');
var Product = require('./product.js');

const storeSchema = new mongoose.Schema({
    items: [Product.schema],
    location: String,
    rating: Number //rating of the store and its products
})

module.exports = mongoose.model('Store',storeSchema);