//list dependencies

var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
//var path = require("path");

var PORT = process.env.PORT || 3000; //define port
var db = require("./models");
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"))
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

//sync the sequelize models
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on port: " + PORT);
  });
});
//app.listen(port);
