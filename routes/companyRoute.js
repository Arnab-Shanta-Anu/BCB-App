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

//view single company
router.get("/:name", (req, res) => {
  res.render("company", { title: "company view" });
});

//add a company
router.post("/:name", (req, res) => {
  let company = new Company({
    name: "benham",
    address: "savar",
    phone: "01234",
    email: "abc@d",
    BIN: "1234",
    ID: "1234",
    pass: "1234",
    circle: "1",
  });
  company
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
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
