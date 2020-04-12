const { validationResult } = require('express-validator');
const Product = require('../models/product');

class ProductController {
  addNewImages(req, res) {
    if (req.files) {
      const imagePaths = req.files.map((e) => 'images/' + e.filename);
      res.status(200).send(imagePaths);
    } else {
      res.sendStatus(404);
    }
  }
  async addNewProduct(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(206).send(errors.mapped());
    }
    await Product.create(req.body);
    res.status(200).send('Product has been succesfully aded');
  }
}

module.exports = new ProductController();
