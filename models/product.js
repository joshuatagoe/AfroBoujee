const mongoose = require('mongoose');
URLSlugs = require('mongoose-url-slugs');


const productSchema = new mongoose.Schema({
    name : String,
    quantity : String,
    price : Number,
    pricecurrency : String, //dollars or euros and francs, used to determine conversion rates for different users
    properties : [String],
    description: String

})

productSchema.plugin(URLSlugs('name'));

module.exports = mongoose.model('Product', productSchema);