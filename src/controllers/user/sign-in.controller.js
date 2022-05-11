const { userService } = require('../../services');

const signInController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const token = await userService.signIn(email, password);

    res.json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = { signInController };
