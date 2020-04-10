const express = require("express");
const userRouter = express.Router();
const UserController = require("../controllers/userController");

userRouter.get("/", UserController.getUser);

module.exports = userRouter;
