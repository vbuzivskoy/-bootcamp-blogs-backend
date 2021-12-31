const { articleService } = require('../../services');

const getArticles = async (req, res, next) => {
  const { tag, author } = req.query;
  const searchOptions = { tag, author };

  try {
    const articles = await articleService.getArticles(searchOptions);

    res.json(articles);
  } catch (error) {
    next(error);
  }
};

module.exports = { getArticles };
