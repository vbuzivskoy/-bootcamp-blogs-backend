const { tagDao } = require('../dao');

const findTags = (searchOptions) => tagDao.findTags(searchOptions);

const getTagByName = (name) => tagDao.getTagByName(name);

const addTag = (tagParams) => tagDao.addTag(tagParams);

module.exports = {
  findTags,
  addTag,
  getTagByName,
};
