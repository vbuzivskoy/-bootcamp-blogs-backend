const express = require('express');
const { NOT_FOUND, INTERNAL_SERVER_ERROR } = require('http-status');

const { apiV1Router } = require('./routes/api/v1');
const { compressionMiddleware } = require('./middlewares');

const server = async () => {
  const app = express();
  const port = 3000;

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

  app.listen(port, () => {
    console.log(`App is listning at http://localhost:${port}`);
  });
};

module.exports = server;
