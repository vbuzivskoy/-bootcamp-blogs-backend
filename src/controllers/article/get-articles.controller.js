const { articleService } = require('../../services');

const getArticlesController = async (req, res, next) => {
  const { tag, author, sort, sortOrder } = req.query;
  const searchOptions = { tag, author, sort, sortOrder };

  try {
    const articles = await articleService.getArticles(searchOptions);

    res.json(articles);
  } catch (error) {
    next(error);
  }
};

module.exports = { getArticlesController };
