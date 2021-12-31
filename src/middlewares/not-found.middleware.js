const { NOT_FOUND } = require('http-status');

const notFoundMiddleware = (req, res) => {
  res.status(NOT_FOUND).json({ message: 'Route not found' });
};

module.exports = {
  notFoundMiddleware,
};
