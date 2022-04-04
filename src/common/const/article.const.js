const defaultArticleSortFieldName = 'date';
const likedByListSizeFieldName = 'likedByListSize';

const sortFieldMap = {
  date: 'createdAt',
  likedBy: likedByListSizeFieldName,
};

module.exports = {
  defaultArticleSortFieldName,
  likedByListSizeFieldName,
  sortFieldMap,
};
