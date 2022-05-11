const { userService } = require('../../services');

const getUserByIdController = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const user = await userService.getUserById(userId);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { getUserByIdController };
