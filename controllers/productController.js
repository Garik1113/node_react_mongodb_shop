const multer = require("multer");
const upload = multer({ dest: "uploads/" });
class ProductController {
  addNewImages(req, res) {
    console.log(req.files);
  }
}

module.exports = new ProductController();
