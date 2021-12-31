const { articleService } = require('../../services');

const addArticle = async (req, res, next) => {
  const { title, description, text, tags } = req.body;

  try {
    const newArticleParams = {
      author: req.user,
      title,
      description,
      text,
      tags,
    };

    const articles = await articleService.addArticle(newArticleParams);

    res.json(articles);
  } catch (error) {
    next(error);
  }
};

module.exports = { addArticle };
