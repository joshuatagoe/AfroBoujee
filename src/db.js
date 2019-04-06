// db.js
const mongoose = require('mongoose') ;
URLSlugs = require('mongoose-url-slugs');
//mongoose.connect('mongodb://localhost/hw05');

const storeSchema = new mongoose.Schema({
    user: userSchema,
    items: [productSchema],
    location: String,
    rating: Number //rating of the store and its products
})

//const Review = mongoose.model('Review', reviewschema);

const userSchema = new mongoose.Schema({
    title : String,
    stores: [storeSchema],
    rating: Number, //rating of the user and his products
    reviews : [reviewschema]

})


const productSchema = new mongoose.Schema({
    name : String,
    quantity : String,
    store: storeSchema,
    price : Number,
    pricecurrency : String, //dollars or euros and francs, used to determine conversion rates for different users
    properties : [String]

})
//bookschema.plugin(URLSlugs('title author'));
//const Book = mongoose.model('Book', bookschema );

//mongoose.connect('mongodb://localhost/hw05');



