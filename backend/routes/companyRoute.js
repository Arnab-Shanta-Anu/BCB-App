const express = require("express");
const { get } = require("mongoose");
const {
  getAllCompanies,
  getSingleCompany,
  addCompany,
  updateCompany,
  deleteCompany,
} = require("../controllers/companyController");

let router = express.Router();

//view all companies(/api/companies)
router.get("/", getAllCompanies);

//add a company
router.post("/add", addCompany);

//view single company
router.get("/:id", getSingleCompany);

//delete a company
router.delete("/:id", deleteCompany);

//update a company
router.put("/:id", updateCompany);

module.exports = router;
