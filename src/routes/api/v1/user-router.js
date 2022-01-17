const { Router } = require('express');

const {
  signIn,
  signUp,
  getUserById,
} = require('../../../controllers/user');

const userRouter = Router();

userRouter.get('/:userId', getUserById);
userRouter.post('/signin', signIn);
userRouter.post('/', signUp);

module.exports = {
  userRouter,
};
