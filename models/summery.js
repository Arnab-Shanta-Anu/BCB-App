const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const summerySchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    BE: {
      type: String,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    HS: {
      type: String,
      required: true,
    },
    puchaseVal: {
      type: Number,
      required: true,
    },
    unitPrice: {
      type: Number,
      required: true,
    },
    unitSalePrice: {
      type: Number,
      required: true,
    },
    salesVal: {
      type: Number,
      required: true,
    },
    vat: {
      type: Number,
      required: true,
    },
    rebate: {
      type: Number,
      required: true,
    },
    deposite: {
      type: Number,
      required: true,
    },
    opeing: {
      type: Number,
      required: true,
    },
    saleQuantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Summery = mongoose.model("Summery", summerySchema);
module.exports = Summery;
