const request = require('request');
const apiController = {};

let apiLink = 'http://pokeapi.co/api/v2/pokemon/55/';
// let apiLink = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
// let apiLink = 'https://swapi.co/api/films/1/';

apiController.makeSingleReq = (req, expRes, next) => {
	request(apiLink, { json: true }, (err, apiRes, body) => {
	  if (err) { return console.log(err); }
	  // console.log(apiRes);
	  console.log(body);
	  expRes.send({name: body.name});
	});
};


module.exports = apiController;