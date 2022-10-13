const express = require("express");
const Company = require("../models/company");
const Importersummary = require("../models/importersummary");
const LocalTradersummary = require("../models/localTradersummary");
const Manufacturersummary = require("../models/manufacturersummary");
let router = express.Router();

//view all summaries
router.get("/all/:companyId", (req, res) => {
  const id = req.params.companyId;
  Company.findById(id)
    .then((result) => {
      let company = result;
      if (company.type === "Importer") {
        Importersummary.find({ companyId: id })
          .then((result) => {
            res.render("all-summaries", {
              title: "summaries",
              company,
              summaries: result,
            });
          })
          .catch((err) => {
            res.status(404);
            res.redirect("/404");
          });
      }
      if (company.type === "Local trader") {
        LocalTradersummary.find({ companyId: id })
          .then((result) => {
            res.render("all-summaries", {
              title: "summaries",
              company,
              summaries: result,
            });
          })
          .catch((err) => {
            res.status(404);
            res.redirect("/404");
          });
      }

      if (company.type === "Manufacturer") {
        Manufacturersummary.find({ companyId: id })
          .then((result) => {
            res.render("all-summaries", {
              title: "summaries",
              company,
              summaries: result,
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

//view add summary page
router.get("/add/:companyId", (req, res) => {
  Company.findById(req.params.companyId)
    .then((result) => {
      res.render("add-importer-summary", { title: "summary", company: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

//add summary
router.post("/add/:companyId", (req, res) => {
  console.log("post req hit");
  let importersummary = new Importersummary(req.body);
  importersummary
    .save()
    .then((response) => {
      res.json({
        redirect: "/summary/all/" + req.params.companyId,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
//view single summary
router.get("/:summaryId", (req, res) => {
  Importersummary.findById(req.params.summaryId)
    .then((response) => {
      Importersummary.find({ month: response.month, year: response.year })
        .countDocuments()
        .then((count) => {
          res.render("summary", {
            title: "summary",
            summary: response,
            count,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

//delete summary
router.delete("/:companyId/:summaryId", (req, res) => {
  Importersummary.findByIdAndDelete(req.params.summaryId)
    .then((response) => {
      res.json({
        redirect: "/summary/all/" + req.params.companyId,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//summary modify
router.put("/:summaryId", (req, res) => {
  res.send("summary modify req");
});

module.exports = router;
