const { Router } = require('express');

const {
  signInController,
  signUpController,
  getCurrentUserController,
  getUserByIdController,
} = require('../../../controllers/user');
const { authMiddleware } = require('../../../middlewares');

const userRouter = Router();

userRouter.get('/me', authMiddleware, getCurrentUserController);
userRouter.get('/:userId', getUserByIdController);
userRouter.post('/signin', signInController);
userRouter.post('/', signUpController);

module.exports = {
  userRouter,
};
