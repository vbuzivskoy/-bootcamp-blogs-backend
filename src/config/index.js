const dotenv = require('dotenv')

dotenv.config();
const ENV = process.env;

const config = {
  serverPort: ENV.PORT,
};

module.exports = config;