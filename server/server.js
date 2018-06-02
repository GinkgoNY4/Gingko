const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const userController = require('./userController'); 
const apiController = require('./apiController'); 
// const router = express.Router();
// const port = process.env.PORT || 3000;

const mongoose = require('mongoose'); 
const MLAB_URI = 'mongodb://admin:admin0@ds245250.mlab.com:45250/gingkony4';
mongoose.connect(MLAB_URI);
mongoose.connection.once('open', () => { 
  console.log('Connected to Database'); 
});

app.use(bodyParser.json());

app.use(express.static(__dirname + './../dist'));

app.post('/signup', userController.createUser);

app.post('/login', userController.verifyUser);

app.listen(3000, (err, res) => {
	if (err) return err;
	console.log('Listening on port 3000!');
});

module.exports = app;
