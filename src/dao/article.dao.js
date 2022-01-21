const { ArticleModel, CommentModel, TagModel } = require('../models');
const {
  NotFoundError,
  AuthorizationError,
  InternalError,
} = require('../errors');

class ArticleDao {
  constructor(ArticleModel, CommentModel, TagModel) {
    this.ArticleModel = ArticleModel;
    this.CommentModel = CommentModel;
    this.TagModel = TagModel;
  }

  async findArticles(searchOptions) {
    const { author, tag } = searchOptions;

    const filterOptions = {};
    if (author) {
      filterOptions.author = author;
    }

    if (tag) {
      filterOptions.tags = tag;
    }

    try {
      return await this.ArticleModel.find(filterOptions)
        .populate('author')
        .populate('likedBy')
        .populate('tags');
    } catch (error) {
      throw new InternalError('Failed to get aticles', error);
    }
  }

  async addArticle(articleParams) {
    try {
      const newArticle = new this.ArticleModel(articleParams);
      await newArticle.save();
      await this.TagModel.updateMany(
        {
          _id: { $in: newArticle.tags },
        },
        { $addToSet: { articles: [newArticle._id] } },
      );

      return newArticle;
    } catch (error) {
      throw new InternalError('Failed to create a new aticle', error);
    }
  }

  async findArticleById(articleId) {
    let article;
    try {
      article = await this.ArticleModel.findById(articleId)
        .populate('author')
        .populate('likedBy')
        .populate({ path: 'comments', populate: { path: 'author' } })
        .populate('tags');
    } catch (error) {
      throw new InternalError(
        `Failed to get the article with id ${articleId}`,
        error,
      );
    }

    if (!article) {
      throw new NotFoundError(`Article with id ${articleId} not found`);
    }

    return article;
  }

  async toggleLikeByArticle(articleId, user) {
    const article = await this.findArticleById(articleId);

    if (!article) {
      throw new NotFoundError(`Article with id ${articleId} not found`);
    }

    try {
      if (article.likedBy.some((votedUser) => votedUser.equals(user._id))) {
        article.likedBy.pop(user);
      } else {
        article.likedBy.push(user);
      }

      await article.save();

      return article.likedBy;
    } catch (error) {
      throw new InternalError(
        `Failed to like the article with id ${articleId} by the user with id ${user._id}`,
        error,
      );
    }
  }

  async addComment(articleId, commentParams) {
    const article = await this.ArticleModel.findById(articleId);

    if (!article) {
      throw new NotFoundError(`Article with id ${articleId} not found`);
    }

    let newComment;

    try {
      newComment = new this.CommentModel(commentParams);
      await newComment.save();
    } catch (error) {
      throw new InternalError('Failed to create a new comment', error);
    }

    try {
      article.comments.push(newComment);
      await article.save();

      return newComment;
    } catch (error) {
      throw new InternalError(
        `Failed to update the article with id ${articleId} when adding a new comment`,
        error,
      );
    }
  }

  async deleteArticle(articleId, user) {
    const article = await this.ArticleModel.findById(articleId);

    if (!article) {
      throw new NotFoundError(`Article with id ${articleId} not found`);
    }

    if (!article.author._id.equals(user._id)) {
      throw new AuthorizationError(
        `Forbidden to delete the article with id ${articleId} for the user with id ${user._id}`,
      );
    }

    try {
      await this.TagModel.updateMany(
        {
          _id: { $in: article.tags },
        },
        { $pull: { articles: article._id } },
      );
      await this.CommentModel.deleteMany({ _id: { $in: article.comments } });
      await this.ArticleModel.findByIdAndDelete(articleId);
    } catch (error) {
      throw new InternalError(
        `Failed to delete to the article with id ${articleId}`,
        error,
      );
    }
  }
}

module.exports = new ArticleDao(ArticleModel, CommentModel, TagModel);
