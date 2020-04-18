const express = require("express");
const userRouter = express.Router();
const UserController = require("../controllers/userController");
const {
  signupValidate,
  loginValidate,
} = require("../validations/userValidation");

const jwt = require("jsonwebtoken");
function authenticateToken(req, res, next) {
  const autHeader = req.headers["authorization"];
  const token = autHeader && autHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

userRouter.post("/create", signupValidate(), UserController.create);
userRouter.post("/login", loginValidate(), UserController.login);
userRouter.post("/get", authenticateToken, UserController.get);

module.exports = userRouter;
