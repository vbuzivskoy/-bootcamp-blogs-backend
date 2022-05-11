const { CREATED } = require('http-status');

const { userService } = require('../../services');

const signUpController = async (req, res, next) => {
  const { firstName, lastName, email, password, avatarUrl } = req.body;

  try {
    const newUserParams = {
      firstName,
      lastName,
      email,
      password,
      avatarUrl,
    };

    const newUser = await userService.addUser(newUserParams);
    const userData = {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      avatarUrl: newUser.avatarUrl,
    };

    res.status(CREATED).json(userData);
  } catch (error) {
    next(error);
  }
};

module.exports = { signUpController };
