const express = require("express");
const Company = require("../models/company");
const Summery = require("../models/summery");

let router = express.Router();

//view all summeries
router.get("/all/:companyId", (req, res) => {
  const id = req.params.companyId;
  let company;
  Company.findById(id)
    .then((result) => {
      company = result;
    })
    .catch((err) => {
      console.log(err);
    });
  Summery.find({ companyId: id })
    .then((result) => {
      res.render("all-summeries", {
        title: "Summeries",
        company,
        summeries: result,
      });
    })
    .catch((err) => {
      res.status(404);
      res.redirect("/404");
    });
});
//view add summery page
router.get("/add/:companyId", (req, res) => {
  res.render("summery", { title: "summery" });
});

//add summery
router.post("/add/:companyId", (req, res) => {
  res.send("summery add req");
});
//view summery
router.get("/:summeryId", (req, res) => {
  res.render("summery", { title: "summery" });
});

//delete summery
router.delete("/:summeryId", (req, res) => {
  res.send("summery dlt req");
});

//summery modify
router.put("/:summeryId", (req, res) => {
  res.send("summery modify req");
});

module.exports = router;
