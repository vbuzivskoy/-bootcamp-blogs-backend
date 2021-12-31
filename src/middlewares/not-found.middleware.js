const { NotFoundError } = require('../errors');

const notFoundMiddleware = (req, res, next) => {
  next(new NotFoundError('Route not found'));
};

module.exports = {
  notFoundMiddleware,
};
