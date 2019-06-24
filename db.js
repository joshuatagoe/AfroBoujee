// db.js

// is the environment variable, NODE_ENV, set to PRODUCTION?
let dbconf;
dbconf = 'mongodb://localhost/nextisomorphictext';
const mongoose = require('mongoose');

console.log(dbconf);

mongoose.connect(dbconf);
