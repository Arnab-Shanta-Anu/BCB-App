const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    BIN: {
      type: String,
      required: true,
    },
    ID: {
      type: String,
      required: true,
    },
    pass: {
      type: String,
      required: true,
    },
    circle: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);
module.exports = Company;
