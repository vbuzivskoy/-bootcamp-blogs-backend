module.exports = {
  ...require('./compression.middleware'),
  ...require('./error-handler.middleware'),
  ...require('./not-found.middleware'),
};
