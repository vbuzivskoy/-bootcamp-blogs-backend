const { UserModel } = require('../models');
const { InternalError } = require('../errors');

class UserDao {
  constructor(UserModel) {
    this.UserModel = UserModel;
  }

  async findUserById(userId) {
    try {
      const user = await this.UserModel.findById(userId);
    } catch (error) {
      throw new InternalError(`Failed to get a user with id ${userId}`, error);
    }
  }
}

module.exports = new UserDao(UserModel);
