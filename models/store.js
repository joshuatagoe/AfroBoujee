const mongoose = require('mongoose');
var Product = require('./product.js');

const storeSchema = new mongoose.Schema({
    storename: String,
    items: [Product.schema],
    location: String,
    rating: Number //rating of the store and its products
})

storeSchema.plugin(URLSlugs('storename'));

module.exports = mongoose.model('Store',storeSchema);