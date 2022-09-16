const express = require("express");

let router = express.Router();
router.post("/", (req, res, next) => {
  console.log("Hit get");
  console.log(req.body.name);
  console.log(req.body.pass);
  res.send(req.url);
});

module.exports = router;
