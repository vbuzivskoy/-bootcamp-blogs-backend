const { TagModel } = require('../models');
const { InternalError, ConflictError } = require('../errors');
const {
  mongooseDuplicateKeyErrorCode,
  defaultTagSort,
} = require('../common/const');

class TagDao {
  constructor(TagModel) {
    this.TagModel = TagModel;
  }

  async findTags(searchOptions) {
    const {
      namePart = '',
      limit = 10,
      sort = defaultTagSort,
      sortOrder = 'desc',
    } = searchOptions;

    const tagArticleListSizeFieldName = 'articleListSize';
    const sortFieldName =
      sort === defaultTagSort ? tagArticleListSizeFieldName : sort;
    const sortOptions = {
      [sortFieldName]: sortOrder,
    };

    try {
      return await this.TagModel.aggregate([
        {
          $match: {
            name: { $regex: namePart, $options: 'i' },
          },
        },
      ])
        .addFields({
          [tagArticleListSizeFieldName]: { $size: '$articles' },
          id: '$_id',
        })
        .sort(sortOptions)
        .limit(limit);
    } catch (error) {
      throw new InternalError('Failed to get tags', error);
    }
  }

  async addTag(tagParams) {
    try {
      const newTag = new this.TagModel(tagParams);
      await newTag.save();

      return newTag;
    } catch (error) {
      if (error.code === mongooseDuplicateKeyErrorCode) {
        throw new ConflictError(
          `Failed to create a new tag: a tag with name "${tagParams.name}" already exists`,
        );
      }
      throw new InternalError('Failed to create a new tag', error);
    }
  }
}

module.exports = new TagDao(TagModel);
