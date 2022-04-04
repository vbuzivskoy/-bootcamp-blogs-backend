const jwt = require('jsonwebtoken');

const { UserModel } = require('../models');
const {
  InternalError,
  ConflictError,
  AuthenticationError,
} = require('../errors');
const { generateSalt, hashPassword } = require('../common/utils');
const {
  mongooseDuplicateKeyErrorCode,
  sensitiveDataFields,
} = require('../common/const');
const { authSecretKey } = require('../config');

class UserDao {
  constructor(UserModel) {
    this.UserModel = UserModel;
  }

  async findUserById(userId) {
    try {
      return await this.UserModel.findById(userId);
    } catch (error) {
      throw new InternalError(`Failed to get a user with id ${userId}`, error);
    }
  }

  async addUser(userParams) {
    const { firstName, lastName, email, password, avatarUrl } = userParams;

    const hashSalt = generateSalt();
    const passwordHash = hashPassword(password, hashSalt);

    const newUserParams = {
      firstName,
      lastName,
      email,
      hashSalt,
      passwordHash,
    };

    if (avatarUrl) {
      newUserParams.avatarUrl = avatarUrl;
    }

    try {
      const newUser = new this.UserModel(newUserParams);
      await newUser.save();

      return newUser;
    } catch (error) {
      if (error.code === mongooseDuplicateKeyErrorCode) {
        throw new ConflictError(
          `Failed to create a new user: a user with email ${email} already exists`,
        );
      }
      throw new InternalError('Failed to create a new user', error);
    }
  }

  async findUserByEmail(email, withSensitive = false) {
    try {
      const query = this.UserModel.findOne({ email });
      if (withSensitive) {
        query.select(
          sensitiveDataFields.map((fieldName) => `+${fieldName}`).join(' '),
        );
      }

      return await query.exec();
    } catch (error) {
      throw new InternalError(
        `Failed to get a user with email ${email}`,
        error,
      );
    }
  }

  async signIn(email, password) {
    let user;
    try {
      user = await this.findUserByEmail(email, true);
    } catch (error) {
      throw new InternalError('Failed to sign a user in', error);
    }

    if (!user || !user.isPasswordValid(password)) {
      throw new AuthenticationError('Failed to sign a user in');
    }

    return jwt.sign({ userId: user._id }, authSecretKey);
  }
}

module.exports = new UserDao(UserModel);
