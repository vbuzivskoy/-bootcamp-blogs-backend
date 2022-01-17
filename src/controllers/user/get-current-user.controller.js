const getCurrentUser = async (req, res, next) => {
  const { user } = req;

  try {
    res.json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { getCurrentUser };
