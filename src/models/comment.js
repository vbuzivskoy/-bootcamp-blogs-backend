const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  author: {
    type: 'ObjectId',
    ref: 'User',
    required: true,
  },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

commentSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

commentSchema.set('toJSON', {
  virtuals: true,
});

module.exports = model('Comment', commentSchema);
