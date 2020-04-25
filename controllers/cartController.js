const ShoppingCart = require("../models/shoppingCart");
const Products = require("../models/product");

class CartController {
  async add(req, res) {
    const { product_id, user_id } = req.body;
    const cart_user = await ShoppingCart.find({ user_id: user_id });
    if (cart_user.length === 0) {
      ShoppingCart.create({
        user_id,
        products: [{ product_id }],
      });
    } else {
      ShoppingCart.findByIdAndUpdate(
        cart_user[0]._id,
        { $push: { products: { product_id } } },
        async (err, data) => {
          if (err) throw err;
          const product = await Products.findById(product_id);
          res.status(200).send(product);
        }
      );
    }
  }
  async getProducts(req, res) {
    if (req.user) {
      const cartProductsIds = await ShoppingCart.find({
        user_id: req.user._id,
      });
      const products = [];
      const cartProducts = cartProductsIds[0].products;
      for (let i = 0; i < cartProducts.length; i++) {
        const pro = await Products.findById(cartProducts[i].product_id);
        products.push(pro);
      }
      res.send(products);
    }
  }
}

module.exports = new CartController();
