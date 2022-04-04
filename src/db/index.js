const { connect } = require('mongoose');

const { mongodbUri } = require('../config');

let db;

const initDb = async (
  options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
) => {
  if (!db) {
    try {
      db = await connect(mongodbUri, options);
      console.log('Successfully connected to database');
    } catch (error) {
      console.log('Database connection failed. exiting now...');
      console.error(error);
      process.exit(1);
    }
  }
};

const getDb = () => db;

module.exports = {
  initDb,
  getDb,
};
