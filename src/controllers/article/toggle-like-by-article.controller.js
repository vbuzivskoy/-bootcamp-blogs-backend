const { articleService } = require('../../services');

const toggleLikeByArticle = async (req, res, next) => {
  const { articleId } = req.params;

  try {
    const article = await articleService.toggleLikeByArticle(articleId, req.user);
    res.json(article);
  } catch (error) {
    next(error);
  }
};

module.exports = { toggleLikeByArticle };
