const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  author: { type: 'ObjectId', ref: 'User', required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = model('Comment', commentSchema);
