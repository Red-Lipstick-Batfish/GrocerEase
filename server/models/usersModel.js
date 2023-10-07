const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// user schema
const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  restrictions: [String], // -> health property in the api 
});

module.exports = mongoose.model('User', userSchema);


