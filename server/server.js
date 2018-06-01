/* eslint-disable */
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const apiController = require('./apiController');

app.use(bodyParser.json());
app.use(express.static(__dirname + './../dist'));

app.listen(3000);

module.exports = app;
