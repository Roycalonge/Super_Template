// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  pages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Page' }]
});

module.exports = mongoose.model('User', userSchema);

// backend/models/Page.js
const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
  title: String,
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Page', pageSchema);