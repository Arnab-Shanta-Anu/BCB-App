const express = require("express");
const Company = require("../models/company");

let router = express.Router();

//view all companies
router.get("/all", (req, res) => {
  Company.find()
    .sort({ name: 1 })
    .then((result) => {
      res.render("all-companies", {
        title: "all companies",
        companies: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//add a company
router.get("/add", (req, res) => {
  res.render("add-company", { title: "Add company" });
});
router.post("/add", (req, res) => {
  let company = new Company(req.body);
  company
    .save()
    .then((result) => {
      res.redirect("/company/all");
    })
    .catch((err) => {
      console.log(err);
    });
});

//view single company
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Company.findById(id)
    .then((result) => {
      res.render("company", { title: "company view", company: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

//delete a company
router.delete("/:id", (req, res) => {
  res.send("company delete req");
});

//modify a company details
router.put("/:id", (req, res) => {
  res.send(`${req.params.id} modify req`);
});

module.exports = router;
