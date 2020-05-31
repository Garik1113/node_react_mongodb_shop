const ShoppingCart = require("../models/shoppingCart");
const Products = require("../models/product");

class CartController {
  async add(req, res) {
    const { product_id } = req.body;
    const user_id = req.user._id;
    const product = await Products.findById(product_id);
    if (product) {
      const price = product.price;
      const total_count = product.quantity;
      const cart_user = await ShoppingCart.find({ user_id: user_id });
      if (cart_user.length === 0) {
        ShoppingCart.create({
          user_id,
          products: [{ product_id, total_count, price }],
        });
      } else {
        for (let i = 0; i < cart_user[0].products.length; i++) {
          if (cart_user[0].products[i].product_id == product_id) {
            await ShoppingCart.updateOne(
              { _id: cart_user[0]._id, "products.product_id": product_id },
              { $inc: { "products.$.quantity": 1 } }
            );
            return res.end();
          }
        }
        const product = await Products.findById(product_id);
        if (product) {
          await ShoppingCart.findByIdAndUpdate(cart_user[0]._id, {
            $push: { products: { product_id, price, total_count } },
          });
          res.status(200).send(product);
        } else {
          res.end();
        }
      }
    }
  }
  async getProducts(req, res) {
    if (req.user) {
      const cartProductsIds = await ShoppingCart.find({
        user_id: req.user._id,
      });
      const products = [];
      console.log(cartProductsIds[0].products);
      if (cartProductsIds[0]) {
        const cartProducts = cartProductsIds[0].products;
        for (let i = 0; i < cartProducts.length; i++) {
          const pro = await Products.findById(cartProducts[i].product_id);
          console.log(pro);
          if (pro) {
            const cart = cartProductsIds[0].products[i];
            products.push({ pro, cart });
          }
        }
      }

      res.send(products);
    }
  }
  async incrementProQuantity(req, res) {
    if (req.user) {
      const { product_id, num } = req.body;
      const user_id = req.user._id;
      await ShoppingCart.updateOne(
        { user_id: user_id, "products.product_id": product_id },
        { $inc: { "products.$.quantity": num } }
      );
      return res.end();
    }
  }
}

module.exports = new CartController();
