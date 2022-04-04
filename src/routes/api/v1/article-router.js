const { Router } = require('express');

const { authMiddleware } = require('../../../middlewares');
const {
  getArticlesController,
  getArticleByIdController,
  addArticleController,
  toggleLikeByArticleController,
  addCommentController,
  deleteArticleController,
} = require('../../../controllers/article');

const articleRouter = Router();

articleRouter.get('/', getArticlesController);
articleRouter.get('/:articleId', getArticleByIdController);
articleRouter.post('/', authMiddleware, addArticleController);
articleRouter.patch(
  '/:articleId/toggle-like',
  authMiddleware,
  toggleLikeByArticleController,
);
articleRouter.post('/:articleId/comment', authMiddleware, addCommentController);
articleRouter.delete('/:articleId', authMiddleware, deleteArticleController);

module.exports = {
  articleRouter,
};
