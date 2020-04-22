const Categories = require("../models/category");

class CategoryController {
  async getAll(req, res) {
    Categories.find((err, data) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.send(data);
    });
  }

  addNew(req, res) {
    const { name } = req.params;
    if (name) {
      Categories.create({ name: name.toLowerCase() }, (err, data) => {
        if (err) {
          res.status(500).send(err);
        }
        return res.send(data);
      });
    }
  }
  async getProducts(req, res) {
    const name = req.body.name;
  }
}

module.exports = new CategoryController();
