const ProductController = require("../controllers/productController");
const express = require("express");
const homeRouter = express.Router();

homeRouter.use("/getTopProducts", ProductController.getTopProducts);

module.exports = homeRouter;
