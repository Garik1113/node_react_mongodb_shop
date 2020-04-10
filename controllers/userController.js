const User = require("../models/user");

class UserController {
  async getUser(req, res) {
    res.send("User");
  }
}

module.exports = new UserController();
