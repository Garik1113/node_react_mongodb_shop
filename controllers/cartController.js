const ShoppingCart = require("../models/shoppingCart");

class CartController {
  add(req, res) {
    const id = req.body.id;
    console.log(req.user);

    // ShoppingCart.create({
    //   user_id: "1123",
    //   products: [{ product_id: "12" }, { product_id: "215" }],
    // });
  }
}

module.exports = new CartController();
