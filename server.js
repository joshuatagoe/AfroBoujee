const express = require('express');
const session = require("express-session");
const uid = require('uid-safe');
const next = require('next');
const passport = require('passport');

require('./passport')(passport)

const fs = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const { join } = require('path');
const db = require('./db');
const UserAuth = require('./routes/UserAuth')(passport);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const models = join(__dirname, 'models');
fs.readdirSync(models)
  .filter(file => ~file.search(/^[^.].*\.js$/))
  .forEach(file => require(join(models, file)));

app
  .prepare()
  .then(() => {
    const server = express();
    const User = mongoose.model('User');
    const Product = mongoose.model('Product');
    const Store = mongoose.model('Store');
    server.use(express.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    //session management
    const sessionConfig = {
      secret: uid.sync(18),
      cookie: {
        maxAge: 86400 * 1000 // 24 hours in milliseconds
      },
      resave: false,
      saveUninitialized: true
    };
    server.use(session(sessionConfig))
    

  //configure passsport
    server.use(passport.initialize());
    server.use(passport.session());


  //routes
    server.use('/auth', UserAuth);

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
