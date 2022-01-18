const { Router } = require('express');

const { articleRouter } = require('./article-router');
const { userRouter } = require('./user-router');
const { tagRouter } = require('./tag-router');

const apiV1Router = Router();
apiV1Router.use('/article', articleRouter);
apiV1Router.use('/user', userRouter);
apiV1Router.use('/tag', tagRouter);

module.exports = { apiV1Router };
