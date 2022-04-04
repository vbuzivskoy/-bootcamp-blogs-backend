const crypto = require('crypto');

const saltLength = 16;

const generateSalt = () => {
  return crypto.randomBytes(saltLength).toString('hex');
};

module.exports = {
  generateSalt,
};
