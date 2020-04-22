const User = require("../models/user");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { validationResult } = require("express-validator");

//Jwt
const jwt = require("jsonwebtoken");
function generateToken(user) {
  const newUser = {
    name: user.name,
    email: user.email,
    _id: user._id.toString(),
  };
  return (token = jwt.sign(newUser, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15s",
  }));
}

class UserController {
  async create(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(203).send({ errors: errors.mapped() });
    }
    const existUser = await User.findOne({ email: req.body.email });
    if (existUser) {
      return res.status(203).send({
        errors: { email: { msg: "User with that email is exist" } },
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {
      name: req.body.name,
      surname: req.body.surname,
      age: req.body.age,
      email: req.body.email,
      password: hashedPassword,
    };
    await User.create(user, (err, data) => {
      // res.header.authorization = ;
      return res.status(200).send(generateToken(data));
    });
  }

  async login(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ errors: errors.mapped() });
    }
    passport.authenticate(
      "local",
      { failureFlash: true },
      (err, user, info) => {
        if (err) {
          return next(err);
        }
        if (!user) {
          return res.send({ errors: info });
        }
        req.login(user, async (err) => {
          if (err) {
            return next(err);
          }
          await User.findOneAndUpdate(
            { _id: user._id },
            { isAuthenticated: true }
          );
          const token = generateToken(user);
          return res.send({ user, token });
        });
      }
    )(req, res, next);
  }
  logOut(req, res, next) {
    req.logout();
    res.end();
  }
}

module.exports = new UserController();
