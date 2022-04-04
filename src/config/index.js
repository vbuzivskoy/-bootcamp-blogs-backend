const dotenv = require('dotenv')

dotenv.config();
const ENV = process.env;

const config = {
  serverPort: ENV.PORT,
  mongodbUri: ENV.MONGODB_URI,
  authSecretKey: ENV.AUTH_SECRET_KEY,
  corsOrigin: ENV.CORS_ORIGIN,
};

module.exports = config;