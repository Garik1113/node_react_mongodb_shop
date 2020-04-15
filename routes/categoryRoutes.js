const { Router } = require("express");
const CategoryRouter = Router();
const CategoryController = require("../controllers/categoryController");

CategoryRouter.get("/addnew/:name", CategoryController.addNew);
CategoryRouter.get("/getall", CategoryController.getAll);

module.exports = CategoryRouter;
