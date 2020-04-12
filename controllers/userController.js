const User = require('../models/user');
const { validationResult } = require('express-validator');

class UserController {
  async getUser(req, res) {
    const error = validationResult(req);
    console.log(error);
  }
}

module.exports = new UserController();
