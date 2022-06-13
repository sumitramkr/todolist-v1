const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    var day = new Date();
    // var today = day.getDay();  //[have to remove as it stores number of weekday and .toLocaleDateString can't change it]
    var dayJs = "";

    var options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric"
    };

    var dayJs = day.toLocaleDateString("en-US", options);

    res.render("list", {dayHTML: dayJs});
});

app.listen(4700, function(req, res) {
    console.log("server is live on port 4700");
});