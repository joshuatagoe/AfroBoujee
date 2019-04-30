const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : String,
    quantity : String,
    price : Number,
    pricecurrency : String, //dollars or euros and francs, used to determine conversion rates for different users
    properties : [String],
    description: String,
    imgsrc : String

})

module.exports = mongoose.model('Product', productSchema);