const User = require("../models/user");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

class UserController {
  async create(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ errors: errors.mapped() });
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
}

module.exports = new UserController();
