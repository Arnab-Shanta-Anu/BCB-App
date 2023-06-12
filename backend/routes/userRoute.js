const express = require("express");
let router = express.Router();

router.post("/login", (req, res) => {
  res.send("login req");
});
//add user
router.post("/:id", (req, res) => {
  res.send("user add req");
});

//delete user
router.delete("/:id", (req, res) => {
  res.send("user dlt req");
});

//user modify
router.put("/:name", (req, res) => {
  res.send("user modify req");
});

module.exports = router;
