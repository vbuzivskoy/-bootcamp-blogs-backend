const jwt = require('jsonwebtoken');

const { userService } = require('../services');
const { AuthenticationError } = require('../errors');
const { authSecretKey } = require('../config');

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    const error = new AuthenticationError(
      'Authentication failed: missed authorization header',
    );
    return next(error);
  }

  const authToken = authHeader.split(' ')[1];
  if (!authToken) {
    const error = new AuthenticationError(
      'Authentication failed: empty authorization token',
    );
    return next(error);
  }

  let userId;

  try {
    const payload = jwt.verify(authToken, authSecretKey);
    userId = payload.userId;
    if (!userId) {
      throw new Error('Wrong auth token payload');
    }
  } catch (originalError) {
    const error = new AuthenticationError(
      'Authentication failed',
      originalError,
    );
    return next(error);
  }

  try {
    const user = await userService.getUserById(userId);

    if (!user) {
      const error = new AuthenticationError('Authentication failed');
      return next(error);
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

module.exports = {
  authMiddleware,
};
