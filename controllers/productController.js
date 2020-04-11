const { validationResult } = require("express-validator");

class ProductController {
  addNewImages(req, res) {
    if (req.files) {
      const imagePaths = req.files.map((e) => "images/" + e.filename);
      res.status(200).send(imagePaths);
    } else {
      res.sendStatus(404);
    }
  }
  addNewProduct(req, res) {
    const errors = validationResult(req);
    console.log(errors);
  }
}

module.exports = new ProductController();
