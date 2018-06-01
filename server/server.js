const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const app = express();
const userController = require ('./userController');
const router = express.Router();
const port = process.env.PORT || 3000;

// const staticFolder = require('../dist');


app.use((err, req, res, next) => {
	res.write(200, {
		'Content-Type': 'application/json'
	});
	// next();
});

app.use('/', express.static(path.join(__dirname, 'dist')));
// path.join(__dirname, 

app.get('/', (req, res) => {
	res.send('Homepage');
});

app.get('/signup', (req, res) => {

});

app.get('/login', (req, res) => {

});

app.get('/verifyuser', (req, res) {

});

app.post('/signup', userController.createUser);
app.post('/login', userController.verifyUser);
app.post('/verifyuser', userController.verifyUser);

app.listen(3000, (err, res) => {
	if (err) return err;
	console.log('Listening on port 3000!');
});



module.exports = app;

// req.params;