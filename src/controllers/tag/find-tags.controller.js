const { NotFoundError } = require('../../errors');
const { tagService } = require('../../services');

const findTagsController = async (req, res, next) => {
  const { namePart, name, limit, sort, sortOrder } = req.query;

  if (name) {
    try {
      const tag = await tagService.getTagByName(name);
      return res.json([tag]);
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.json([]);
      }

      return next(error);
    }
  }

  const searchOptions = {
    namePart,
    sort,
    sortOrder,
  };

  if (limit) {
    searchOptions.limit = parseInt(limit, 10);
  }

  try {
    const tags = await tagService.findTags(searchOptions);

    res.json(tags);
  } catch (error) {
    next(error);
  }
};

module.exports = { findTagsController };
