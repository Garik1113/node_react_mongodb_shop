const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const UserController = require('../controllers/userController');
const signupValidate = require('../validations/userValidation');

userRouter.post('/create', signupValidate(), UserController.create);
userRouter.post(
  '/login',
  passport.authenticate('local', { failureFlash: true }),
  UserController.login
);

module.exports = userRouter;
