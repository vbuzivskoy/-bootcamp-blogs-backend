const { userDao } = require('../dao');

const getUserById = (userId) => userDao.findUserById(userId);

const addUser = (userParams) => userDao.addUser(userParams);

const signIn = (email, password) => userDao.signIn(email, password);

module.exports = {
  getUserById,
  addUser,
  signIn,
};
