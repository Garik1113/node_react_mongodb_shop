const { model, Schema } = require("mongoose");

const product = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  gender: { type: String, required: true },
  quantity: { type: Number, required: true },
  imagePaths: { type: Array, required: true },
  views: { type: Number, default: 0 },
  countOfSales: { type: Number, default: 0 },
});

module.exports = model("product", product);
