const { model, Schema } = require("mongoose");

const user = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAuthenticated: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
});

module.exports = model("user", user);
