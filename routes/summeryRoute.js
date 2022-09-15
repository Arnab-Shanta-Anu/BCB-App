const express = require("express");
let router = express.Router();

//view summery
router.get("/:name", (req, res) => {
  res.render("summery");
});

//add summery
router.post("/:name", (req, res) => {
  res.send("summery add req");
});

//delete summery
router.delete("/:name", (req, res) => {
  res.send("summery dlt req");
});

//summery modify
router.put("/:name", (req, res) => {
  res.send("summery modify req");
});

module.exports = router;
