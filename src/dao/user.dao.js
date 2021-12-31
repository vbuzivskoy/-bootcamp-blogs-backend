const { UserModel } = require('../models');

class UserDao {
  constructor(UserModel) {
    this.UserModel = UserModel;
  }

  findUserById(userId) {
    return this.UserModel.findById(userId);
  }
}

module.exports = new UserDao(UserModel);
