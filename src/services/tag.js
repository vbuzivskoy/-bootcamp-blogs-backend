const { tagDao } = require('../dao');

const findTags = (searchOptions) => tagDao.findTags(searchOptions);

const addTag = (tagParams) => tagDao.addTag(tagParams);

module.exports = {
  findTags,
  addTag,
};
