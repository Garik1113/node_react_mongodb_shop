class HomeController {
  async getGenders(req, res) {
    res.send("Genders");
  }
  async getCategories(req, res) {
    res.send("Categories");
  }
}

module.exports = new HomeController();
