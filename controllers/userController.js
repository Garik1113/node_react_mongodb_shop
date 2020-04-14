const User = require("../models/user");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { validationResult } = require("express-validator");

class UserController {
  async create(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ errors: errors.mapped() });
    }
    const existUser = await User.findOne({ email: req.body.email });
    if (existUser) {
      return res.send({
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
    await User.create(user);
    res.send("OK");
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
          return res.send({ user });
        });
      }
    )(req, res, next);
  }
}

module.exports = new UserController();
