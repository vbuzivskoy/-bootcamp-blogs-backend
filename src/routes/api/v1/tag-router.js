const { Router } = require('express');

const { authMiddleware } = require('../../../middlewares');
const {
  findTagsController,
  addTagController,
  getTagByIdController,
} = require('../../../controllers/tag');

const tagRouter = Router();

tagRouter.get('/', findTagsController);
tagRouter.get('/:id', getTagByIdController);
tagRouter.post('/', authMiddleware, addTagController);

module.exports = {
  tagRouter,
};
