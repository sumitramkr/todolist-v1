const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static("public"));

var items = [];
let works = [];

app.get("/", function (req, res) {
  var day = new Date();
  // var today = day.getDay();  //[have to remove as it stores number of weekday and .toLocaleDateString can't change it]
  var dayJs = "";

  var options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  var dayJs = day.toLocaleDateString("en-US", options);

  res.render("list", { titleHTML: dayJs, itemHTML: items });
});

app.get("/work", function (req, res) {
  res.render("list", { titleHTML: "Work", itemHTML: works });
});

app.post("/", function (req, res) {
  //getting post request from form for both pages
  var item = req.body.item_;

  if (req.body.listName === "Work") {
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
