const express = require("express");
const ProductRouter = express.Router();
const ProductController = require("../controllers/productController");
const proValidate = require("../validations/productValidation");

ProductRouter.use("/addNewImage", ProductController.addNewImages);
ProductRouter.post(
  "/addNewProduct",
  proValidate(),
  ProductController.addNewProduct
);

ProductRouter.get("/getPage/:id", ProductController.getPage);

module.exports = ProductRouter;
