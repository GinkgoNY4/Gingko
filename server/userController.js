const User = require('../db/mongodb-orm');

// middleware for logins && signups

const userController = {};

userController.getAllUsers = (req, res) => {
	User.find({}, (err, users) => {
		let allUsers = {};
		
		allUsers[username] = req.body.username;
		allUsers[password] = req.body.password;
		allUsers[interests] = req.body.interests;

		res.send(allUsers);
	});
};

userController.createUser = (req, res) => {
	// console.log('req body is : ', req.body);
	res.send(req.body);

	User.create({
		username: req.body.username,
		password: req.body.password,
		interests: req.body.interests
	}, (err, user) => {
		if (err) res.send('error is : ', err);
		else res.status(200).send(user);
	});

};

userController.verifyUser = (req, res, next) => {

	User.findOne(req.body, (err, userInfo) => {
		if (req.body.username === userInfo.username) {
			res.send(userInfo);
		} else {
			res.send('user does not exist, please create an account', err);
		}

	});

};

module.exports = userController;

