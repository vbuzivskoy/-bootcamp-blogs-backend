const { Schema, model } = require('mongoose');

const tagSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      index: true,
      required: true,
    },
    articles: [{ type: 'ObjectId', ref: 'Article' }],
  },
  { versionKey: false },
);

tagSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

tagSchema.set('toJSON', {
  virtuals: true,
});

module.exports = model('Tag', tagSchema);
