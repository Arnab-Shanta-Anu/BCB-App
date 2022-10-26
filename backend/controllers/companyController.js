const Company = require("../models/company");

const getAllCompanies = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const companies = await Company.find();
  res.status(200).json(companies);
};

module.exports = {
  getAllCompanies,
};
