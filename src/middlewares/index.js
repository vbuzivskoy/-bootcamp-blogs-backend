module.exports = {
  ...require('./auth.middleware'),
  ...require('./compression.middleware'),
  ...require('./error-handler.middleware'),
  ...require('./not-found.middleware'),
};
