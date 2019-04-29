const fs = require('fs');
const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const multer = require('multer');
const mongoose = require('mongoose');
const crypto = require('crypto');
const app = express();
const path = require("path");
const join = require('path').join;
if(process.env.NODE_ENV === 'development') { 
    // configure webpack-dev-middlware with our original webpack config
    // then... "use" webpack-dev-middleware
    const webpackDevMiddleware = require("webpack-dev-middleware");
    const webpackConfig = require('./webpack.config.js')
    const webpack = require("webpack");
    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {
        publicPath:'/javascripts'
    }));
}
//https://alligator.io/nodejs/uploading-files-multer-express/
const storage = multer.diskStorage({
    destination: './public/img/products',
    filename: function (req, file, callback) {
        crypto.pseudoRandomBytes(16, function(err, raw) {
            if (err) return callback(err);
            callback(null, raw.toString('hex') + path.extname(file.originalname));
          });      //..
    }
  });
  var upload = multer({ storage : storage })

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
const models = join(__dirname, 'models');

// configure webpack-dev-middlware with our original webpack config
// then... "use" webpack-dev-middleware
//piece of code taken from https://github.com/madhums/node-express-mongoose-demo/blob/master/server.js
fs.readdirSync(models)
  .filter(file => ~file.search(/^[^.].*\.js$/))
  .forEach(file => require(join(models, file)));


const User = mongoose.model('User');
const Product = mongoose.model('Product');
const Store = mongoose.model('Store');
const defaultusertest = "Musa Keita II"
const defaultemailtest = "testdummy@email.com"
const password = "Juchen2!"
/**const session = require('express-session');
const sessionOptions = {
    secret: 'secret for singing session id',
    saveUninitialized: false,
    resave: false
};

app.use(session(sessionOptions));**/

app.get('/',function(req,res){
    res.render('homepage');
});

app.get('/product/:store_id/:productname',function(req,res){
    Store.findById(req.params.store_id, function(err, currStore, count){
        currStore.products.findOne({"name": req.params.productname}, function(err,currProduct, count){
            res.render('product', {
                Product : currProduct
            })
        })
    })
});



app.get('/market',function(req,res){
    res.render('marketplace');
});

app.get('/check',function(req,res){
    console.log("test");
    res.render('checkout');
});


app.post('/register', function(req,res){
    new User({
        username: req.body.name, 
        password :req.body.password, 
        email : req.body.email
    }).save(function(err, user, count){
        res.redirect('/');
    })

});

app.get('/test',function(req,res){
    User.find(function(err, currUser, count){
        console.log(currUser);
        //res.render(currUser);
    })
})

app.get('/mystores',function(req,res){
    User.findOne({"username": defaultusertest}, function(err, currUser, count){
        res.render('mystores', {

            currUser : currUser

      })
  });
})

app.get('/mystores/:slug/myproducts',function(req,res){
    if(req.params.slug){
        Store.findOne({ "slug" : req.params.slug}, function(err, currStore, count){
            res.render('products', {
                currStore : currStore
            })
        })
    }
    else{
        res.status(404).render('error');
    }
    

})



app.post('/mystores',function(req,res){
    let tempslug = (req.body.username.toLowerCase())+"-"+(req.body.location.toLowerCase())+"-"+(req.body.name.toLowerCase())
    console.log(tempslug);
    new Store({
        storename: req.body.name, 
        location :req.body.location, 
        slug: tempslug
    }).save(function(err, store, count){
        console.log(store);
        console.log(err);
        console.log(count);
        User.findOneAndUpdate({"username" : defaultusertest, "email" : defaultemailtest, "password" : password}, { $push: { stores : store} }, function(err, currstore, count){
            res.redirect('/mystores');
    })
})

})

app.post('/mystores/:slug/myproducts', upload.single('avatar'), function(req,res){
    if(!req.file){
        console.log("No file received");
        return res.send({
            success: false
        });
    }
    else{
        console.log("filed received");
        return res.send({
            success: true
        });

    }

    //Store.findByIdAndUpdate(req.body.storeid, { $push: { products : {storename : req.body.name }} }, function(){
        //var url = '/mystores/'+req.body.storeid+'/myproducts';
       // res.redirect('/mystores/'+req.params.storename+'/myproducts');
   // })
})

app.get('/loggedin', function(req,res){
    Book.findOne({ email: req.params.username, password : req.params.password}, function(err, User, count){
        res.render('homepage');
    })
    
})

app.get('/login', function(req,res){
    res.render('login');    
})

app.get('/register', function(req,res){
    res.render('register');    
})

app.get('/user/:username',function(req,res){
    User.findOne({"username": req.params.username}, function(err, currUser, count){
        let validated= false
        if(password===currUser.password){
            validated=true;
        }
        res.render('user', {

            User : currUser,
            validated : validated

      })
  });

});

app.use(function(req, res, next){
    res.status(404).render('error');
});


app.listen(process.env.PORT || 3000);