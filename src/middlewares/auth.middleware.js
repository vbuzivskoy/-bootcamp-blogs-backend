const { userService } = require('../services');

const authMiddleware = async (req, res, next) => {
  try {
    const user = await userService.getUserById('61ce0a388e57bada855c0fcd');
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
