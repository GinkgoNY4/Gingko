/* eslint-disable */
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + './../dist'));

app.get('/apple', function(req, res){
	console.log('In apple route');
	res.sendFile(__dirname + './../dist/index.html');
});
app.get('/route42', function(req, res){
	console.log('In route42');
	// res.sendFile(__dirname + './../dist/index.html'); //path.resolve('temp/index.html')
	res.sendFile(path.resolve('dist/index.html'));
});

app.listen(3000);

module.exports = app;
