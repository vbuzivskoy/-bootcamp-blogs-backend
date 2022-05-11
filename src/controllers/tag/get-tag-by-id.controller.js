const { tagService } = require('../../services');

const getTagByIdController = async (req, res, next) => {
  const { id } = req.params;

  try {
    const tag = await tagService.getTagById(id);
    return res.json(tag);
  } catch (error) {
    next(error);
  }
};

module.exports = { getTagByIdController };
