const { CREATED } = require('http-status');

const { tagService } = require('../../services');

const addTag = async (req, res, next) => {
  const { name } = req.body;

  try {
    const newTagParams = {
      name
    };

    const tag = await tagService.addTag(newTagParams);

    res.status(CREATED).json(tag);
  } catch (error) {
    next(error);
  }
};

module.exports = { addTag };
