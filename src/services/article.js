const { articleDao } = require('../dao');

const getArticles = (searchOptions) => articleDao.findArticles(searchOptions);

const addArticle = (articleParams) => articleDao.addArticle(articleParams);

const getArticleById = (articleId) => articleDao.findArticleById(articleId);

const toggleLikeByArticle = (articleId, user) =>
  articleDao.toggleLikeByArticle(articleId, user);

const addComment = (articleId, commentParams) =>
  articleDao.addComment(articleId, commentParams);

const deleteArticle = (articleId, user) =>
  articleDao.deleteArticle(articleId, user);

module.exports = {
  getArticles,
  addArticle,
  getArticleById,
  toggleLikeByArticle,
  addComment,
  deleteArticle,
};
