module.exports = {
  ...require('./sign-in.controller'),
  ...require('./sign-up.controller'),
  ...require('./get-current-user.controller'),
  ...require('./get-user-by-id.controller'),
};
