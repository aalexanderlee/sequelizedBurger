//place all route.blahblah using express.Router()
//list all dependencies here
var express = require('express');
var router = express.Router();

//require the models and sequelize package
var db = require('../models');
var Sequelize = require('sequelize');

//load burgers
router.get("/", function(req, res) {
  db.burgers.findAll({}).then(function(data) {
    var hbsObject = {burgers : data};
    console.log("I'm here.", hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  db.burgers.create({"burger_name" = req.body.name}).then(function(data) {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  db.burgers.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(function(data) {
    res.redirect("/");
  });
});

//export routes for server.js 
module.exports = router;
