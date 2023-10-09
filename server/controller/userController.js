const User = require('../models/usersModel');
const bcrypt = require('bcrypt');

const userController = {

  // Create User login
  createUser: async (req, res, next) => {
    try {
      // pull out username and password from body and check to make sure username and password are strings
      const {username, password, restrictions} = req.body;
        
    


      // if username/password is not a string or is not provided, return error
      if (!username || !password) {
        return next({
          log: 'Missing Username/Password',
          status: 400,
          message: {err: 'A Username and Password are required'}
        });
      }
    
      // Salt and hashing password. Argument passed in salt determines work factor. Current work factor is 2^N so its 2^12 here
      const salt = await bcrypt.genSalt(12);
      console.log('this is the salt', salt);
      const hashedPassword = await bcrypt.hash(password, salt);
      console.log('this is the hashed password', hashedPassword);
      // Create and save the Username/Password in DB
      const newUser = await User.create({username, password: hashedPassword, restrictions});
      res.locals.user = newUser;
      console.log(newUser);
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
  verifyUser: async (req, res, next) => {
    console.log('verifyUser called');
    try {
      const { username, password } = req.body;
      // Catch if username/password not provided
      if (!username || !password) {
        return next({
          log: 'Missing username or password in userController.verifyUser',
          status: 400,
          message: {err: 'Username and Password required'},
        });
      }

      // search DB for user
      const user = await User.findOne({ username });
      console.log('this is the retrurned user:', user);

      // no user found in DB
      if (!user) {
        console.log('no user found');
        return next({
          log: 'Invalid username in userController.verifyUser',
          status: 400,
          message: {err: 'Invalid Username or Password'},
        });
        // username found in DB, compare password to hashed password
      } else {
        try {
        // compare user provided password with user stored password
          const result = await bcrypt.compare(password, user.password);
          // if passwords don't match return error
          if (!result) {
            console.log('password does not match');
            return next({
              log: 'Invalid password in userController.verifyUser',
              status: 400,
              message: {err: 'Invalid Username or Password'},
            });
            // if passwords match, save returned user schema for middlewares
          } else {
            res.locals.user = user;
            return next();
          }
        } catch (err) {
          return next({
            log: 'Error occured in userController.verifyUser',
            status: 400,
            message: {err: 'An error occured'},
          });
        }
      }
    } catch (err) {
      return next({
        log: 'Error occured in userController.verifyUser',
        status: 400,
        message: {err: 'Unable to verify username and password'},
      });
    }
  }
};

module.exports = userController;