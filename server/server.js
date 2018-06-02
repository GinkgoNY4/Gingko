const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const userController = require('./userController'); 
const apiController = require('./apiController'); 

const mongoose = require('mongoose'); 
const MLAB_URI = 'mongodb://admin:admin0@ds245250.mlab.com:45250/gingkony4';
mongoose.connect(MLAB_URI);
mongoose.connection.once('open', () => { 
	console.log('Connected to Database'); 
});

app.use(bodyParser.json());

app.use(express.static(__dirname + './../dist'));

app.post('/signup', userController.createUser);

app.post('/login', 	userController.verifyUser,
					apiController.makeInterestRequests);

app.post('/settings', userController.defaultInterest, (req, res) => {
	console.log('updated interest1 is : ', res.body);
	console.log('updated interest2 is : ', req.body);
});


app.listen(3000, (err, res) => {
	if (err) return err;
	console.log('Listening on port 3000!');
});

module.exports = app;
