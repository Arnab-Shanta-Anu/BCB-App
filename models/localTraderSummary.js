const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const localTradersummarySchema = new Schema(
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
    BEdate: {
      type: String,
      required: true,
    },
    ProductName: {
      type: String,
    },
  },
  { timestamps: true }
);

const LocalTradersummary = mongoose.model(
  "LocalTradersummary",
  localTradersummarySchema
);
module.exports = LocalTradersummary;
