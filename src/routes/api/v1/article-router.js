const { Router } = require('express');
const { getAllArticles } = require('../../../controllers/article');

const articleRouter = Router();

articleRouter.get('/', getAllArticles);

module.exports = {
  articleRouter,
};
