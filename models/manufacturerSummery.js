const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const manufacturerSummerySchema = new Schema(
  {
    companyId: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    BE: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    ProductName: {
      type: String,
    },
  },
  { timestamps: true }
);

const ManufacturerSummery = mongoose.model(
  "ManufacturerSummery",
  manufacturerSummerySchema
);
module.exports = ManufacturerSummery;
