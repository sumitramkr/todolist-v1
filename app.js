const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));
const date = require(__dirname + "/date.js");
var items = [];
let works = [];

app.get("/", function (req, res) {
  let dayJs = date.getDate();
  res.render("list", { titleHTML: dayJs, itemHTML: items });
});

app.get("/work", function (req, res) {
  res.render("list", { titleHTML: "Work", itemHTML: works });
});

app.post("/", function (req, res) {
  var item = req.body.item_;

  if (req.body.listName === "Work") {
    //getting post request from form for both pages
    works.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.listen(4700, function (req, res) {
  console.log("server is live on port 4700");
});
