const express = require('express');
const { NOT_FOUND, INTERNAL_SERVER_ERROR } = require('http-status');

const { serverPort } = require('./config');
const { apiV1Router } = require('./routes/api/v1');
const { compressionMiddleware } = require('./middlewares');
const { initDb } = require('./db');

const server = async () => {
  await initDb();

  const app = express();

  app.use(compressionMiddleware);
  app.use('/api/v1', apiV1Router);

  app.all('*', (req, res) => {
    res.status(NOT_FOUND).json({ message: 'Not found' });
  });

  app.use((err, req, res, next) => {
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ message: err.message || 'Internal server error' });
  });

  app.listen(serverPort, () => {
    console.log(`App is listning at http://localhost:${serverPort}`);
  });
};

module.exports = server;
