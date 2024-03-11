// Newscontroller.mjs
class ProductController {
  index(req, res) {
    res.render("product");
  }

  showDetailsProduct(req, res) {
    res.send("đây là details product...");
  }
}
export default new ProductController();
