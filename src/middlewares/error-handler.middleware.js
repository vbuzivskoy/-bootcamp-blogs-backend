const { INTERNAL_SERVER_ERROR } = require('http-status');

const errorHandlerMiddleware = async (err, req, res, next) => {
  if (err.originalError && err.originalError.message) {
    console.error(`${err.message} with error: ${err.originalError.message}`);
  } else {
    console.error(err.message);
  }

  res
    .status(err.httpStatus || INTERNAL_SERVER_ERROR)
    .json({ message: err.message || 'Internal server error' });
};

module.exports = {
  errorHandlerMiddleware,
};
