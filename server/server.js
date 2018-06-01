const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const userController = require ('./userController');
const router = express.Router();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());

app.use(express.static(__dirname + './../dist'));


app.get('/route42', (req, res) => {
	console.log('In route42');
	// res.sendFile(__dirname + './../dist/index.html'); //path.resolve('temp/index.html')
	res.sendFile(path.resolve('dist/index.html'));
});

app.get('/', (req, res) => {
	res.send('Homepage');
});

app.get('/signup', userController.createUser);

app.get('/login', userController.getAllUsers, userController.verifyUser);

app.post('/signup', (req, res) => {
	res.send(req.body);
});

app.post('/login, (req, res) => {
	res.send(req.body);
});

app.listen(3000, (err, res) => {
	if (err) return err;
	console.log('Listening on port 3000!');
});

module.exports = app;
