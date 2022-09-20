const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const summerySchema = new Schema(
  {
    companyId: {
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

const Summery = mongoose.model("Summery", summerySchema);
module.exports = Summery;
