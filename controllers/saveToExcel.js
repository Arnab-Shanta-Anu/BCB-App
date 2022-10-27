const xl = require("excel4node");
const fs = require("fs");
const dir = "./print";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const saveToExcel = (infos, companyName) => {
  var workbook = new xl.Workbook();

  // Add Worksheets to the workbook
  var worksheet = workbook.addWorksheet("Sheet 1");

  worksheet.cell(1, 1, 1, 2, true).string(companyName);
  worksheet.cell(1, 3).string(infos.month);

  // Set value of cell B1 to 300 as a number type styled with paramaters of style
  worksheet.cell(1, 4).string(infos.year);

  // Set value of cell C1 to a formula styled with paramaters of style
  worksheet.cell(3, 1).string("BE");
  worksheet.cell(3, 2).string("Date");
  worksheet.cell(3, 3).string("Product Description");
  worksheet.cell(3, 4).string("HS Code");
  worksheet.cell(3, 5).string("Quantity");
  worksheet.cell(3, 6).string("Purchase Value");
  worksheet.cell(3, 7).string("Purchase Rate");
  worksheet.cell(3, 8).string("Addition %");
  worksheet.cell(3, 9).string("Addition Value");
  worksheet.cell(3, 10).string("Sales Rate");
  worksheet.cell(3, 11).string("Sales Value");
  worksheet.cell(3, 12).string("Vat %");
  worksheet.cell(3, 13).string("Vat Amount");
  worksheet.cell(3, 14).string("Rebate");
  worksheet.cell(3, 15).string("AT 5%");
  worksheet.cell(3, 16).string("TR Deposite");
  worksheet.cell(3, 17).string("Opening Stock");
  worksheet.cell(3, 18).string("Sales Quantity");
  worksheet.cell(3, 19).string("Closing Stock");
  worksheet.cell(3, 20).string("TR");
  worksheet.cell(3, 21).string("Closing Balance");
  let y;
  let totalQty = 0.0;
  let totalPurchaseVal = 0.0;
  let totalAddittionVal = 0.0;
  let totalSalesVal = 0.0;
  let totalVatVal = 0.0;
  let totalRebate = 0.0;
  let totalAt = 0.0;
  let totalTrDeposite = 0.0;
  let totalSalesQty = 0.0;
  let totalTr = 0.0;
  infos.info.forEach((x, i) => {
    i += 4;
    y = i + 1;
    worksheet.cell(i, 1).string(x.BE);
    worksheet.cell(i, 2).string(x.BEdate);
    worksheet.cell(i, 3).string(x.productName);
    worksheet.cell(i, 4).string(x.HScode);
    worksheet.cell(i, 5).number(x.quantity);
    totalQty += x.quantity;
    worksheet.cell(i, 6).number(x.purchaseVal);
    totalPurchaseVal += x.purchaseVal;
    worksheet.cell(i, 7).number(x.purchaseRate);
    worksheet.cell(i, 8).number(x.additionRate);
    worksheet.cell(i, 9).number(x.additionVal);
    totalAddittionVal += x.additionVal;
    worksheet.cell(i, 10).number(x.salesRate);
    worksheet.cell(i, 11).number(x.salesVal);
    totalSalesVal += x.salesVal;
    worksheet.cell(i, 12).number(x.vatRate);
    worksheet.cell(i, 13).number(x.vatVal);
    totalVatVal += x.vatVal;
    worksheet.cell(i, 14).number(x.rebate);
    totalRebate += x.rebate;
    worksheet.cell(i, 15).number(x.at);
    totalAt += x.at;
    worksheet.cell(i, 16).number(x.trDeposite);
    totalTrDeposite += x.trDeposite;
    worksheet.cell(i, 17).number(x.openingStock);
    worksheet.cell(i, 18).number(x.salesQty);
    totalSalesQty += x.salesQty;
    worksheet.cell(i, 19).number(x.closingStock);
    worksheet.cell(i, 20).number(x.tr);
    totalTr += x.tr;
    worksheet.cell(i, 21).number(x.closingBal);
  });
  y++;
  let style = {
    font: { size: 16, bold: true },
  };
  worksheet.cell(y, 1).string("Total").style(style);
  worksheet.cell(y, 5).number(totalQty).style(style);
  worksheet.cell(y, 6).number(totalPurchaseVal).style(style);
  worksheet.cell(y, 9).number(totalAddittionVal).style(style);
  worksheet.cell(y, 11).number(totalSalesVal).style(style);
  worksheet.cell(y, 13).number(totalVatVal).style(style);
  worksheet.cell(y, 14).number(totalRebate).style(style);
  worksheet.cell(y, 15).number(totalAt).style(style);
  worksheet.cell(y, 16).number(totalTrDeposite).style(style);
  worksheet.cell(y, 18).number(totalSalesQty).style(style);
  worksheet.cell(y, 20).number(totalTr).style(style);

  workbook.write("./print/Excel.xlsx");
  require("child_process").exec('start "" "G:\\BCB-App\\print"');
};
module.exports = saveToExcel;
