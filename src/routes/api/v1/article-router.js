const { Router } = require('express');

const { authMiddleware } = require('../../../middlewares');
const {
  getArticles,
  getArticleById,
  addArticle,
  toggleLikeByArticle,
  addComment,
  deleteArticle,
} = require('../../../controllers/article');

const articleRouter = Router();

articleRouter.get('/', getArticles);
articleRouter.get('/:articleId', getArticleById);
articleRouter.post('/', authMiddleware, addArticle);
articleRouter.patch(
  '/:articleId/toggle-like',
  authMiddleware,
  toggleLikeByArticle,
);
articleRouter.post('/:articleId/comment', authMiddleware, addComment);
articleRouter.delete('/:articleId', authMiddleware, deleteArticle);

module.exports = {
  articleRouter,
};
