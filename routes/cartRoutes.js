const { Router } = require("express");
const router = Router();
const CartController = require("../controllers/cartController");

router.post("/add", CartController.add);

module.exports = router;
