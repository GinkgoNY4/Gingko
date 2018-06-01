const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const userController = require ('./userController');
const router = express.Router();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/', express.static(__dirname + './../dist'));

app.get('/apple', function(req, res){
	console.log('In apple route');
	res.sendFile(__dirname + './../dist/index.html');
});
app.get('/route42', (req, res) => {
	console.log('In route42');
	// res.sendFile(__dirname + './../dist/index.html'); //path.resolve('temp/index.html')
	res.sendFile(path.resolve('dist/index.html'));
});


app.get('/', (req, res) => {
	res.send('Homepage');
});

app.get('/signup', (req, res) => {

});

app.get('/login', (req, res) => {

});

app.get('/verifyuser', (req, res) => {

});

app.listen(3000, (err, res) => {
	if (err) return err;
	console.log('Listening on port 3000!');
});

module.exports = app;
