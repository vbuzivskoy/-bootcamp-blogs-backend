const compression = require('compression');

const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    return false;
  }

  return compression.filter(req, res);
};

const compressionMiddleware = compression({ filter: shouldCompress });

module.exports = {
  compressionMiddleware,
};
