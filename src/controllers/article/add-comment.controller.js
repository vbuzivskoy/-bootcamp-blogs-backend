const { CREATED } = require('http-status');

const { articleService } = require('../../services');

const addCommentController = async (req, res, next) => {
  const { articleId } = req.params;
  const { text } = req.body;

  try {
    const newCommentParams = {
      author: req.user,
      text,
    };

    const comment = await articleService.addComment(
      articleId,
      newCommentParams,
    );

    res.status(CREATED).json(comment);
  } catch (error) {
    next(error);
  }
};

module.exports = { addCommentController };
