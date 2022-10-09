const express = require("express");
const Company = require("../models/company");
const ImporterSummery = require("../models/importerSummery");
const LocalTraderSummery = require("../models/localTraderSummery");
const ManufacturerSummery = require("../models/manufacturerSummery");
let router = express.Router();

//view all summeries
router.get("/all/:companyId", (req, res) => {
  const id = req.params.companyId;
  Company.findById(id)
    .then((result) => {
      let company = result;
      if (company.type === "Importer") {
        ImporterSummery.find({ companyId: id })
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
      }
      if (company.type === "Local trader") {
        LocalTraderSummery.find({ companyId: id })
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
      }

      if (company.type === "Manufacturer") {
        ManufacturerSummery.find({ companyId: id })
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
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

//view add summery page
router.get("/add/:companyId", (req, res) => {
  Company.findById(req.params.companyId)
    .then((result) => {
      res.render("add-importer-summery", { title: "summery", company: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

//add summery
router.post("/add/:companyId", (req, res) => {
  console.log("post req hit");
  let importerSummery = new ImporterSummery(req.body);
  importerSummery
    .save()
    .then((response) => {
      res.json({
        redirect: "/summery/all/" + req.params.companyId,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
//view single summery
router.get("/:summeryId", (req, res) => {
  ImporterSummery.findById(req.params.summeryId)
    .then((response) => {
      res.render("summery", { title: "summery", summery: response });
    })
    .catch((err) => {
      console.log(err);
    });
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
