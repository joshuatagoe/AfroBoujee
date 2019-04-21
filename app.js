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
const defaultusertest = "Musa Keita II"
const defaulemailtest = "joshuatagoe99@gmail.com"

app.get('/',function(req,res){
    res.render('register');
});

app.post('/register', function(req,res){

});

app.get('/test',function(req,res){
    User.find(function(err, currUser, count){
        console.log(currUser);
        res.render(User);
    })
})

app.get('/mystores',function(req,res){
    User.findOne({"username": defaultusertest}, function(err, currUser, count){
        console.log(currUser);
        console.log(currUser);
        res.render('mystores', {

            currUser : currUser

      })
  });
})

app.get('/mystores/:storename/myproducts',function(req,res){
    Store.findById(req.body.storeid, function(err, currStore, count){
        res.render('products', {
            currStore : currStore
        })
    })

})

app.post('/mystores',function(req,res){
    User.findOneAndUpdate({"username" : "Musa Keita II"}, { $push: { stores : {storename : req.body.name }} }, function(){
        res.redirect('/mystores');
    })

})

app.post('/mystores/:storename/myproducts',function(req,res){

    Store.findByIdAndUpdate(req.body.storeid, { $push: { products : {storename : req.body.name }} }, function(){
        var url = '/mystores/'+req.body.storeid+'/myproducts';
        res.redirect('/myproducts');
    })
})




app.listen(process.env.PORT || 3000);