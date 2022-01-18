const { Router } = require('express');

const { authMiddleware } = require('../../../middlewares');
const { findTags, addTag } = require('../../../controllers/tag');

const tagRouter = Router();

tagRouter.get('/', findTags);
tagRouter.post('/', authMiddleware, addTag);

module.exports = {
  tagRouter,
};
