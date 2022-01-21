const { tagService } = require('../../services');

const getTagByFullNameController = async (req, res, next) => {
  const { name } = req.params;

  try {
    const tag = await tagService.getTagByFullName(name);
    return res.json(tag);
  } catch (error) {
    next(error);
  }
};

module.exports = { getTagByFullNameController };
