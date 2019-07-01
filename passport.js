const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');

module.exports = function(passport){
    passport.serializeUser(function(user,done){
        done(null, user)
    })

    passport.deserializeUser(function(user,done){
        done(null, user)        
    })

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function(email, password, done){
        User.findOne(
          { email: email},
          function(err, currUser) {
              
              if (err) {
                done(err)
              }
              if (currUser) {
                console.log(currUser);
                const valid = currUser.comparePassword(password, currUser.password)
                if(valid){
                  done(null,{
                    username: currUser.username,
                    password: currUser.password
                  })
    
                }
                else{
                  done(null, false);
                }
              }
              else{
                done(null, false);
              }
          }
      )}
    ));
    
}