module.exports = {
  ...require('./get-articles.controller'),
  ...require('./add-article.controller'),
  ...require('./get-article-by-id.controller'),
  ...require('./toggle-like-by-article.controller'),
  ...require('./add-comment.controller'),
  ...require('./delete-article.controller'),
};
