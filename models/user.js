const { model, Schema } = require("mongoose");

const user = new Schema({
  name: String,
  surname: String,
});

module.exports = model("user", user);
