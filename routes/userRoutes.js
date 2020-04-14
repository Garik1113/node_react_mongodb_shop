const express = require("express");
const userRouter = express.Router();
const passport = require("passport");
const UserController = require("../controllers/userController");
const {
  signupValidate,
  loginValidate,
} = require("../validations/userValidation");

userRouter.post("/create", signupValidate(), UserController.create);
userRouter.post("/login", loginValidate(), UserController.login);

module.exports = userRouter;
