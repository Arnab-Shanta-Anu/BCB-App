const express = require("express");
const User = require("../models/user");

let router = express.Router();

router.get("/", (req, res) => {
  res.render("login", { title: "login" });
});

router.post("/", (req, res, next) => {
  console.log("login hit");
  res.redirect("/company/all");
});
module.exports = router;
