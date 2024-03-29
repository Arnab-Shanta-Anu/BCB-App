const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const importersummarySchema = new Schema(
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
    info: [
      {
        BE: {
          type: String,
          required: true,
        },
        BEdate: {
          type: String,
          required: true,
        },
        productName: {
          type: String,
        },
        HScode: {
          type: String,
        },
        quantity: {
          type: Number,
          required: true,
        },
        purchaseVal: {
          type: Number,
          required: true,
        },
        purchaseRate: {
          type: Number,
          required: true,
        },
        additionRate: {
          type: Number,
          required: true,
        },
        additionVal: {
          type: Number,
          required: true,
        },
        salesRate: {
          type: Number,
          required: true,
        },
        salesVal: {
          type: Number,
          required: true,
        },
        vatRate: {
          type: Number,
          required: true,
        },
        vatVal: {
          type: Number,
          required: true,
        },
        rebate: {
          type: Number,
          required: true,
        },
        at: {
          type: Number,
          required: true,
        },
        trDeposite: {
          type: Number,
          required: true,
        },
        openingStock: {
          type: Number,
          required: true,
        },
        salesQty: {
          type: Number,
          required: true,
        },
        closingStock: {
          type: Number,
          required: true,
        },
        tr: {
          type: Number,
          required: true,
        },
        closingBal: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Importersummary = mongoose.model(
  "Importersummary",
  importersummarySchema
);
module.exports = Importersummary;
