const express = require('express');
const next = require('next');
const fs = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const { join } = require('path');
const db = require('./db');

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

    server.post('/register', (req, res) => {
      console.log(req.body);
      if (!req.body.username | !req.body.password | !req.body.email) {
        res.status(400).send('Invalid username, email, or password');
      }
      User.find(
        { $or: [{ username: req.body.username }, { email: req.body.email }] },
        function(err, currUser, count) {
          console.log(currUser);
          if (currUser.length != 0) {
            console.log('user exists');
            res.send({ error: 'User Currently Exists' });
          } else {
            console.log('Checking if reached');
            new User({
              username: req.body.username,
              password: req.body.password,
              email: req.body.email,
              country: req.body.country,
              age: req.body.age,
            }).save(function(err, user, count) {
              res.json({
                username: user.username,
              });
            });
          }
        }
      );
    });

    server.post('/login', (req, res) => {
      User.findOne(
        { email: req.body.email, password: req.body.password },
        function(err, currUser, count) {
          if (err) {
            res.json({ error: 'error occured boi' });
          }
          if (!currUser) {
            res.json({ error: "user don't exist boi" });
          }
          return res.json({
            username: currUser.username,
          });
        }
      );
    });

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
