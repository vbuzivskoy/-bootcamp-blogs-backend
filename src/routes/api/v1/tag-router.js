const { Router } = require('express');

const { authMiddleware } = require('../../../middlewares');
const {
  findTagsController,
  addTagController,
  getTagByFullNameController,
} = require('../../../controllers/tag');

const tagRouter = Router();

tagRouter.get('/', findTagsController);
tagRouter.get('/:name', getTagByFullNameController);
tagRouter.post('/', authMiddleware, addTagController);

module.exports = {
  tagRouter,
};
