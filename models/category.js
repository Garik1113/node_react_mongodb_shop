const { model, Schema } = require("mongoose");

const category = new Schema({
  name: { required, type: String },
});

module.exports = model("category", category);
