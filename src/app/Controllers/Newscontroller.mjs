// Newscontroller.mjs
class Newscontroller {
  index(req, res) {
    res.render("new");
  }

  showDetails(req, res) {
    res.send("show details");
  }
}
export default new Newscontroller();
