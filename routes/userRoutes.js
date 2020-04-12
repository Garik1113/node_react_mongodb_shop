const express = require("express");
const userRouter = express.Router();
const UserController = require("../controllers/userController");
const signupValidate = require("../validations/userValidation");

userRouter.post("/create", signupValidate(), UserController.create);

module.exports = userRouter;
