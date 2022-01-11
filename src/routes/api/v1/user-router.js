const { Router } = require('express');

const { signIn, signUp } = require('../../../controllers/user');

const userRouter = Router();

userRouter.post('/signin', signIn);
userRouter.post('/', signUp);

module.exports = {
  userRouter,
};
