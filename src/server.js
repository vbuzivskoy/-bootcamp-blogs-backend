const express = require('express');
const { NOT_FOUND } = require('http-status');

const { serverPort } = require('./config');
const { apiV1Router } = require('./routes/api/v1');
const {
  compressionMiddleware,
  errorHandlerMiddleware,
  notFoundMiddleware,
  corsMiddleware,
} = require('./middlewares');
const { initDb } = require('./db');

const server = async () => {
  await initDb();

  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(compressionMiddleware);
  app.use(corsMiddleware);

  app.use('/api/v1', apiV1Router);

  app.all('*', notFoundMiddleware);

  app.use(errorHandlerMiddleware);

  app.listen(serverPort, () => {
    console.log(`App is listening at http://localhost:${serverPort}`);
  });
};

module.exports = server;
