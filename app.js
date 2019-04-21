const fs = require('fs');
const express = require('express');
const db = require('./db');
const mongoose = require('mongoose');
const app = express();
const path = require("path");
const join = require('path').join;
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));
const models = join(__dirname, 'models');

//piece of code taken from https://github.com/madhums/node-express-mongoose-demo/blob/master/server.js
fs.readdirSync(models)
  .filter(file => ~file.search(/^[^.].*\.js$/))
  .forEach(file => require(join(models, file)));


const User = mongoose.model('User');
const Product = mongoose.model('Product');
const Store = mongoose.model('Store');


app.get('/',function(req,res){
    res.render('register');
});

app.post('/', funciton(req,res)){
    
}




app.listen(process.env.PORT || 3000);