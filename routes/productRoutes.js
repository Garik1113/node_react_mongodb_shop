const express = require("express");
const ProductRouter = express.Router();
const ProductController = require("../controllers/productController");

ProductRouter.use("/addNewImage", ProductController.addNewImages);

module.exports = ProductRouter;
