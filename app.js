const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    var day = new Date();
    var today = day.getDay();
    var dayJs = "";

    switch (today) {
        case 0:
            dayJs = "Sunday";
            break;
        
        case 1:
            dayJs = "Monday";
            break;

        case 2:
            dayJs = "Tuesday";
            break;

        case 3:
            dayJs = "Wednesday";
            break;

        case 4:
            dayJs = "Thrusday";
            break;

        case 5:
            dayJs = "Friday";
            break;

        case 6:
            dayJs = "Saturday";
            break;
            
        default:
            break;
    }

    res.render("list", {dayHTML: dayJs});
});

app.listen(4700, function(req, res) {
    console.log("server is live on port 4700");
});