const express = require("express");
const bodyParser = require("body-parser");
let router = express.Router();
router.get("/", (req, res, next) => {
  console.log(req.body.name, req.body.pass);
  if (req.body.name === "John" && req.body.pass === "doe") {
    res.redirect("/company/all");
  } else {
    res.redirect("/company/benham");
  }
  next();
});
module.exports = router;
