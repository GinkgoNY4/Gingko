const User = require('../db/mongodb-orm');

// middleware for logins && signups

const userController = {};

userController.getAllUsers = (req, res) => {
	User.find({}, (err, users) => {
		let allUsers = {};

		users.forEach((user) => {
			allUsers[user._id] = user;
		});
		res.send(allUsers);
	});
};

userController.createUser = (req, res) => {

};

userController.verifyUser = (req, res, next) => {


};

module.exports = userController;

