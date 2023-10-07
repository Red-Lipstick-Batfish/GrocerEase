const User = require('../models/usersModel');
const bcrypt = require('bcrypt');

const userController = {

  createUser: async (req, res, next) => {
    try {
        // pull out username and password from body and check to make sure username and password are strings
        const {username, password, restrictions} = req.body;
        
        if (typeof username === 'string' && typeof password === 'string') {
            const salt = await bcrypt.genSalt(12);
            console.log('this is hte salt', salt);
            const hashedPassword = await bcrypt.hash(password, salt);
            console.log('this is the hashed password', hashedPassword);
            const newUser = await User.create({username, hashedPassword, restrictions});
        } 
        const newUser = new User({username: 'test2', password: 'testing2', restrictions: ['dairy']});
        newUser.save();
        res.locals.user = newUser;
        return next();
        } catch (err) {
            return next({
                
            })
        }
    }    
};

module.exports = userController;