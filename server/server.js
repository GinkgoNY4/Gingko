/* eslint-disable */
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const userController = require('userController'); 

const mongoose = require('mongoose'); 
const MLAB_URI = 'mongodb://admin:admin0@ds245250.mlab.com:45250/gingkony4';
mongoose.connect(MLAB_URI);
mongoose.connection.once('open', () => { 
  console.log('Connected to Database'); 
});

const userRouter = express.Router();

app.use(bodyParser.json());
app.use(express.static(__dirname + './../dist'));

userRouter.post('/', userController.createUser);

app.listen(3000);

module.exports = app;
