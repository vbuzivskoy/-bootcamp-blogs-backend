const { articleService } = require('../../services');

const deleteArticle = async (req, res, next) => {
  const { articleId } = req.params;
  const { user } = req;

  try {
    await articleService.deleteArticle(articleId, user);

    res.json({
      message: `Article with id ${articleId} deleted`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { deleteArticle };
