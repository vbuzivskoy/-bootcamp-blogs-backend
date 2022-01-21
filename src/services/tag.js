const { tagDao } = require('../dao');

const findTags = (searchOptions) => tagDao.findTags(searchOptions);

const getTagByName = (name) => tagDao.getTagByName(name);

const getTagById = (id) => tagDao.getTagById(id);

const addTag = (tagParams) => tagDao.addTag(tagParams);

module.exports = {
  findTags,
  addTag,
  getTagByName,
  getTagById,
};
