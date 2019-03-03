var express = require("express");
var router = express.Router();
var connect = require("./connect");

router.get("/", function(req, res, next) {
  console.log("trying to call db");

  connect("Gymnastics")
    .then(database => {
      console.log("got database");

      database
        .collection("Gymnasts")
        .find({})
        .toArray(function(err, data) {
          //   if (err) return next(err);
          if (err) console.log(err);
          res.json(data);
        });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
