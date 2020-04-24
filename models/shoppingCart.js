const { Schema, model } = require("mongoose");

const product_ids = new Schema({
  product_id: { type: String, required: true },
});
const cart = new Schema({
  user_id: { type: String, required: true },
  products: [
    {
      product_id: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});

module.exports = model("shoppingCart", cart);
