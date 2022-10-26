const express = require("express");
const User = require("../models/user");

let router = express.Router();

router.get("/", (req, res) => {
  res.render("register", { title: "Register" });
});

router.post("/", (req, res, next) => {
  console.log("register hit");
  let user = new User(req.body);
  user
    .save()
    .then(console.log(user))
    .catch((err) => {
      console.log(err);
    });

  res.redirect("/login");
});

module.exports = router;
