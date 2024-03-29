const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const manufacturersummarySchema = new Schema(
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

const Manufacturersummary = mongoose.model(
  "Manufacturersummary",
  manufacturersummarySchema
);
module.exports = Manufacturersummary;
