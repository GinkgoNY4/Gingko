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
		}
	});

};

function isURL(str) {
	var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
	'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name and extension
	'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
	'(\\:\\d+)?'+ // port
	'(\\/[-a-z\\d%@_.~+&:]*)*'+ // path
	'(\\?[;&a-z\\d%@_.,~+&:=-]*)?'+ // query string
	'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	return pattern.test(str);
}

userController.defaultInterest = (req, res, next) => {
	console.log('what am i receiving : ', req.body);
	// console.log('receiving from verification: ', res.locals.userInfo);
	User.findOne(res.locals.userInfo, 
		 (err, success) => {
			console.log('err is : ', err);
			console.log('success : ', success);
		//   if (err) return err;
		//   else res.send(success);
		}
	);
};

userController.addInterest = (req, res, next) => {



};


userController.deleteInterest = (req, res, next) => {

};

module.exports = userController;

