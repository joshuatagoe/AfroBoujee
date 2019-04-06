const express = require('express');
const db = require('./db');
const mongoose = require('mongoose');
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));