const { model, Schema } = require('mongoose');

const articleSchema = new Schema(
  {
    author: { type: 'ObjectId', ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    likedBy: [{ type: 'ObjectId', ref: 'User' }],
    tags: [{ type: 'ObjectId', ref: 'Tag' }],
    comments: [{ type: 'ObjectId', ref: 'Comment' }],
  },
  { versionKey: false },
);

articleSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

articleSchema.set('toJSON', {
  virtuals: true,
});

module.exports = model('Article', articleSchema);
