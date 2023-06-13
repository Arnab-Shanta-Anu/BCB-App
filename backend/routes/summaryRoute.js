const express = require("express");
const saveToExcel = require("../controllers/saveToExcel");
const Company = require("../models/company");
const ImporterSummary = require("../models/importerSummary");
const LocalTraderSummary = require("../models/localTraderSummary");
const ManufacturerSummary = require("../models/manufacturerSummary");
let router = express.Router();

//view all summaries
router.get("/all/:companyId", (req, res) => {
  const id = req.params.companyId;
  Company.findById(id)
    .then((result) => {
      let company = result;
      if (company.type === "Importer") {
        ImporterSummary.find({ companyId: id })
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
        LocalTraderSummary.find({ companyId: id })
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
        ManufacturerSummary.find({ companyId: id })
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
  let importersummary = new ImporterSummary(req.body);
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
//save summary in excel
router.get("/save/:summaryID", (req, res) => {
  (async () => {
    let response = await ImporterSummary.findById(req.params.summaryID);
    await saveToExcel(response);
  })();
});

//view single summary
router.get("/:summaryId", (req, res) => {
  ImporterSummary.findById(req.params.summaryId)
    .then((response) => {
      ImporterSummary.find({ month: response.month, year: response.year })
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
  ImporterSummary.findByIdAndDelete(req.params.summaryId)
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
