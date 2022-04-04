const { articleService } = require('../../services');

const toggleLikeByArticleController = async (req, res, next) => {
  const { articleId } = req.params;

  try {
    const article = await articleService.toggleLikeByArticle(articleId, req.user);
    res.json(article);
  } catch (error) {
    next(error);
  }
};

module.exports = { toggleLikeByArticleController };
