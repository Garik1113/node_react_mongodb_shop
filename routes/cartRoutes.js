const { Router } = require("express");
const router = Router();
const CartController = require("../controllers/cartController");
const jwt = require("jsonwebtoken");
async function authenticateToken(req, res, next) {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[0];
  if (token == null) {
    return res.status(401).send("Not authorizated");
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    // if (err) {
    //   return res.status(403).send("Forbitten");
    // }
    req.user = user;
    next();
  });
}
router.post("/add", CartController.add);
router.post("/getCartProducts", authenticateToken, CartController.getProducts);

module.exports = router;
