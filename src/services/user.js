const { userDao } = require('../dao');

const getUserById = (userId) => userDao.findUserById(userId);

module.exports = {
  getUserById,
};
