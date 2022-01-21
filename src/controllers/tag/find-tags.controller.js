const { tagService } = require('../../services');

const findTags = async (req, res, next) => {
  const { namePart, limit, sort, sortOrder } = req.query;

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

module.exports = { findTags };
