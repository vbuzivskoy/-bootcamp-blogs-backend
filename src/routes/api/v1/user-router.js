const { Router } = require('express');

const {
  signIn,
  signUp,
  getCurrentUser,
  getUserById,
} = require('../../../controllers/user');
const { authMiddleware } = require('../../../middlewares');

const userRouter = Router();

userRouter.get('/me', authMiddleware, getCurrentUser);
userRouter.get('/:userId', getUserById);
userRouter.post('/signin', signIn);
userRouter.post('/', signUp);

module.exports = {
  userRouter,
};
