const express = require("express");
const ProductRouter = express.Router();
const ProductController = require("../controllers/productController");
const { check, validationResult } = require("express-validator");
const validate = () => {
  return [check("name").notEmpty().withMessage("Name is required")];
};

ProductRouter.use("/addNewImage", ProductController.addNewImages);
ProductRouter.post(
  "/addNewProduct",
  validate(),
  ProductController.addNewProduct
);

module.exports = ProductRouter;
