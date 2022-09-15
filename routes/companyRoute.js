const express = require("express");
let router = express.Router();

//view all companies
router.get("/all", (req, res) => {
  res.render("all-companies");
});

//view single company
router.get("/:name", (req, res) => {
  res.render("company");
});

//add a company
router.post("/:name", (req, res) => {
  res.send("company add req");
});

//delete a company
router.delete("/:name", (req, res) => {
  res.send("company delete req");
});

//modify a company details
router.put("/:name", (req, res) => {
  res.send(`${req.params.name} modify req`);
});

module.exports = router;
