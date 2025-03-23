const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  pages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Page' }]
});

module.exports = mongoose.model('User', userSchema);