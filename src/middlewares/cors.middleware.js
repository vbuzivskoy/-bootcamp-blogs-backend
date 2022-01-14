var cors = require('cors');

const { corsOrigin } = require('../config');

var corsOptions = {
  origin: corsOrigin,
  optionsSuccessStatus: 200,
};

const corsMiddleware = cors(corsOptions);

module.exports = {
  corsMiddleware,
};
