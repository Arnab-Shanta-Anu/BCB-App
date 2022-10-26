const Company = require("../models/company");

const getAllCompanies = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getSingleCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const addCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndRemove(req.params.id);
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const updateCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllCompanies,
  getSingleCompany,
  addCompany,
  deleteCompany,
  updateCompany,
};
