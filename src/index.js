import express from "express";
import handlebars from "express-handlebars";
import { fileURLToPath } from "url";
import path from "path";
const app = express();
const port = 3000;


// đường dẫn tới logo
app.use(express.static("./public"))

// Khởi tạo handlebars instance
const hbs = handlebars.create();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// chỉ tới đường dẫn file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "resources", "views"))


// điều hướng đường dẫn 

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("new");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
