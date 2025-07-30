const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  userid: Number,
  date: Date,
  imgurl: String,
  like: Boolean,
  likes: Number,
  comments: [String]
});

module.exports = mongoose.model('Post', postSchema);
