const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const { registerPartials } = require("hbs");
const port = process.env.PORT || 8000;
// app.get(route,callback)

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

console.log(staticPath);

app.set("view engine", "hbs");

hbs.registerPartials(partialPath);

// Public static path
app.use(express.static(staticPath));

app.set("views", templatePath);

// routing
app.get("", (req, res) => {
  res.render("index");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`listening to the port ${port}`);
});
