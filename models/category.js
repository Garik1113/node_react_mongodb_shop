const { model, Schema } = require("mongoose");

const category = new Schema({
  name: { type: String, required: true },
});

module.exports = model("category", category);
