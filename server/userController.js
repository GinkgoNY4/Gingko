const User = require('loginSchema'); 

const userController = { 
  createUser(req, res) {
    User.create({
      username: req.body.username,  
      password: req.body.password
    }, (err, user) => { 
      if (err) res.status(418).send(err);
      res.json(user);      
    });
  }
}

module.exports = userController; 