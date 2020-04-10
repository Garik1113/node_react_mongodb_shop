const HomeController = require("../controllers/homeController");
const express = require("express");
const homeRouter = express.Router();

homeRouter.use("/genders/new", HomeController.getGenders);

module.exports = homeRouter;
