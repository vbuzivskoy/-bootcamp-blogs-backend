const { articleService } = require('../../services');

const addComment = async (req, res, next) => {
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
    
    res.json(comment);
  } catch (error) {
    next(error);
  }
};

module.exports = { addComment };
