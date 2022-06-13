const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    var day = new Date();
    var today = day.getDay();
    var dayJs = "";

    if (today === 0 || today === 6) {
        dayJs = "Weekned";
    } else {
        dayJs = "Weekday";
    }
    res.render("list", {dayHTML: dayJs});
});

app.listen(4700, function(req, res) {
    console.log("server is live on port 4700");
});