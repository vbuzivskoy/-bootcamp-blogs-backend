const { userService } = require('../services');
const { AuthenticationError } = require('../errors')

const authMiddleware = async (req, res, next) => {
  try {
    const user = await userService.getUserById('61ce0a388e57bada855c0fcd');
    // const user = await userService.getUserById('61ce0a388e57bada855c0fcc');
    
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
