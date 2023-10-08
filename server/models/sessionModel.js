const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// session id schema
const sessionSchema = new Schema({
  cookieId: {type: String, required: true, unique: true},
  createdAt: {type: Date, expires: 300000, default: Date.now }
});

module.exports = mongoose.model('Session', sessionSchema);