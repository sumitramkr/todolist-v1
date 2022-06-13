const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.send("Hi");
});

app.listen(4700, function(req, res) {
    console.log("server is live on port 4700");
});