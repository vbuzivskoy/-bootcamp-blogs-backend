const { articleService } = require('../../services');

const getArticleById = async (req, res, next) => {
  const { articleId } = req.params;

  try {
    const article = await articleService.getArticleById(articleId);
    res.json(article);
  } catch (error) {
    next(error);
  }
};

module.exports = { getArticleById };
