const User = require('../models/usersModel');
const bcrypt = require('bcrypt');

const userController = {

  // Create User login
  createUser: async (req, res, next) => {
    try {
      // pull out username and password from body and check to make sure username and password are strings
      const {username, password, confirmPassword} = req.body;
        
      // if username/password is not a string or is not provided, return error
      if (!username || !password || !confirmPassword) {
        return next({
          log: 'Missing Username/Password',
          status: 400,
          message: {err: 'Valid Username and Password required'}
        });

        if (password !== confirmPassword) {
            return next({
              log: 'Password and confirm password do not match',
              status: 400,
              message: {err: 'Passwords must match'}
            });
        
      }
    
      // Salt and hashing password. Argument passed in salt determines work factor. Current work factor is 2^N so its 2^12 here
      const salt = await bcrypt.genSalt(12);
      console.log('this is the salt', salt);
      const hashedPassword = await bcrypt.hash(password, salt);
      console.log('this is the hashed password', hashedPassword);
      // Create and save the Username/Password in DB
      const newUser = await User.create({username, hashedPassword, restrictions});
      return next();
    } catch (err) {
      return next({
        log: 'Error occured in userController.createUser',
        status: 500,
        message: {err: 'An error occured'},
      });
    }
  },

  // Verify User login
  verifyUser: async (req, rest, next) => {
    console.log('verifyUser called');
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return next({
          log: 'Missing username or password in userController.verifyUser',
          status: 400,
          message: {err: 'Username and Password required'},
        });
      }
    } catch (err) {

    }
  }
};

module.exports = userController;