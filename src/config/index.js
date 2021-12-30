const dotenv = require('dotenv')

dotenv.config();
const ENV = process.env;

const config = {
  serverPort: ENV.PORT,
  mongodbUri: ENV.MONGODB_URI,
};

module.exports = config;