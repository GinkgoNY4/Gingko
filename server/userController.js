const User = require('./../db/loginSchema');

// middleware for logins && signups

const userController = {};
userController.createUser = (req, res) => {
	console.log('req body is : ', req.body);

	User.create({
		username: req.body.username,
		password: req.body.password
	}, (err, user) => {
		if (err) {
			console.log(err);
			res.send({error: 'Could not create user'});
		}
		else res.status(200).send(user);
	});

};

userController.verifyUser = (req, res, next) => {

	User.findOne(req.body, (err, userInfo) => {
		if (userInfo == null) {
			res.send({error: 'user does not exist, please create an account'});
		} else {
			res.locals.userInfo = userInfo;
			next();
			// res.send(userInfo);
		}
	});

};

module.exports = userController;

