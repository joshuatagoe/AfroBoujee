const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bodyParser = require("body-parser");

router.use(bodyParser.json());


module.exports = function(passport){
    router.post('/register', (req, res) => {
      console.log(req.body);
      if (!req.body.username | !req.body.password | !req.body.email) {
        res.status(400).send('Invalid username, email, or password');
      }
      User.findOne(
        { email: req.body.email },
        function(err, currUser) {
          if(err){ res.status(500).send("Error Occured")}
          console.log(currUser);
          if (currUser) {
            console.log('user exists');
            res.status(500).send("Error Occured")
          } 
          else {
              console.log('Checking if reached');
              const record = new User()
              record.username= req.body.username
              record.password= record.hashPassword(req.body.password)
              record.email=req.body.email
              record.country=req.body.country
              record.age=req.body.age
              record.save(function(err, user) {
                  if(err){ res.status(500).send("db error")}
                  else{
                      res.send(user)
                  }
            });
          }
        }
      );
    });

    router.post('/login', passport.authenticate('local', {
      SuccessRedirect: '/login',
      failureRedirect : '/register'
    }), function(req, res){

        res.send("hey")
    });
  return router;

}