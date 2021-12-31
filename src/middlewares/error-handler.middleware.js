const { INTERNAL_SERVER_ERROR } = require('http-status');

const errorHandlerMiddleware = async (err, req, res, next) => {
  res
    .status(err.httpStatus || INTERNAL_SERVER_ERROR)
    .json({ message: err.message || 'Internal server error' });
};

module.exports = {
  errorHandlerMiddleware,
};
