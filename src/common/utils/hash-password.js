const crypto = require('crypto');

const hashIterations = 1000;
const hashLength = 64;

const hashPassword = (password, salt) =>
  crypto
    .pbkdf2Sync(password, salt, hashIterations, hashLength, `sha512`)
    .toString(`hex`);

module.exports = {
  hashPassword,
}