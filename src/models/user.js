const { Schema, model } = require('mongoose');

const { hashPassword } = require('../common/utils');

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true, select: false },
    hashSalt: { type: String, required: true, select: false },
    avatarUrl: String,
  },
  { versionKey: false },
);

userSchema.methods.isPasswordValid = function (password) {
  var passwordHash = hashPassword(password, this.hashSalt);
  return this.passwordHash === passwordHash;
};

userSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

userSchema.set('toJSON', {
  virtuals: true,
});

module.exports = model('User', userSchema);
