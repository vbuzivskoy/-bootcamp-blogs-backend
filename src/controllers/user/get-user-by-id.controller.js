const { userService } = require('../../services');

const getUserById = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const user = await userService.getUserById(userId);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { getUserById };
