const { Router } = require('express');

const { articleRouter } = require('./article-router');

const apiV1Router = Router();
apiV1Router.use('/article', articleRouter);

module.exports = { apiV1Router };
