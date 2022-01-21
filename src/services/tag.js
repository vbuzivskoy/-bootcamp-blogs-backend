const { tagDao } = require('../dao');

const findTags = (searchOptions) => tagDao.findTags(searchOptions);

const getTagByFullName = (name) => tagDao.getTagByFullName(name);

const addTag = (tagParams) => tagDao.addTag(tagParams);

module.exports = {
  findTags,
  addTag,
  getTagByFullName,
};
