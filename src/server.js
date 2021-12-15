const express = require('express');
const path = require('path');
const { NOT_FOUND, INTERNAL_SERVER_ERROR } = require('http-status');

const { apiV1Router } = require('./routes/api/v1');
const { compressionMiddleware } = require('./middlewares');

const app = express();
const port = 3000;
const frontendPath = path.join(
  __dirname,
  '..',
  '..',
  'bootcamp-blogs-frontend',
  'dist',
  'bootcamp-blogs-frontend'
);

app.use(compressionMiddleware);
app.use('/api/v1', apiV1Router);
app.use('/', express.static(frontendPath));

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
