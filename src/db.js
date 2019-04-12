// db.js

// is the environment variable, NODE_ENV, set to PRODUCTION? 
let dbconf;
if (process.env.NODE_ENV === 'PRODUCTION') {
 // if we're in PRODUCTION mode, then read the configration from a file
 // use blocking file io to do this...
 const fs = require('fs');
 const path = require('path');
 const fn = path.join(__dirname, 'config.json');
 const data = fs.readFileSync(fn);

 // our configuration file will be in json, so parse it and set the
 // conenction string appropriately!
 const conf = JSON.parse(data);
 dbconf = conf.dbconf;
} else {
 // if we're not in PRODUCTION mode, then use
 dbconf = 'mongodb://Timbuktu';
}

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

mongoose.connect(dbconf);