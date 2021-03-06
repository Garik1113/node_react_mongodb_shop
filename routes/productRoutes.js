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
ProductRouter.get("/addVeiws/:id", ProductController.addViews);
ProductRouter.get("/search/:name", ProductController.searchProducts);
ProductRouter.get("/getProducts/:catName", ProductController.getProducts);
ProductRouter.use("/delete/:id", ProductController.deleteProduct);
ProductRouter.post("/change", ProductController.changeProduct);

module.exports = ProductRouter;
