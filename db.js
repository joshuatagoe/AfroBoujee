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

const Store = mongoose.model('Store', reviewschema);
const User = mongoose.model('User', userSchema);
//bookschema.plugin(URLSlugs('title author'));
const Product = mongoose.model('Product', productSchema );
mongoose.connect(dbconf);