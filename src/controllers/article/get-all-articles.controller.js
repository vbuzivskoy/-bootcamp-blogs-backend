const { allArticles } = require('./article.mock');

const getAllArticles = (req, res) => {
  res.json(allArticles);
};

module.exports = { getAllArticles };
