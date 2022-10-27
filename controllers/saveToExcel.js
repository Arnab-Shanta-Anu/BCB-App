const xl = require("excel4node");
const fs = require("fs");
const dir = "./print";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const saveToExcel = (infos) => {
  var workbook = new xl.Workbook();

  // Add Worksheets to the workbook
  var worksheet = workbook.addWorksheet("Sheet 1");

  // Create a reusable style

  // Set value of cell A1 to 100 as a number type styled with paramaters of style
  worksheet.cell(1, 1).string(infos.month);

  // Set value of cell B1 to 300 as a number type styled with paramaters of style
  worksheet.cell(1, 2).string(infos.year);

  // Set value of cell C1 to a formula styled with paramaters of style
  worksheet.cell(2, 1).string("BE");
  worksheet.cell(2, 2).string("Date");
  worksheet.cell(2, 3).string("Product Description");
  worksheet.cell(2, 4).string("HS Code");
  worksheet.cell(2, 5).string("Quantity");
  worksheet.cell(2, 6).string("Purchase Value");
  worksheet.cell(2, 7).string("Purchase Rate");
  worksheet.cell(2, 8).string("Addition %");
  worksheet.cell(2, 9).string("Addition Value");
  worksheet.cell(2, 10).string("Sales Rate");
  worksheet.cell(2, 11).string("Sales Value");
  worksheet.cell(2, 12).string("Vat %");
  worksheet.cell(2, 13).string("Vat Amount");
  worksheet.cell(2, 14).string("Rebate");
  worksheet.cell(2, 15).string("AT 5%");
  worksheet.cell(2, 16).string("TR Deposite");
  worksheet.cell(2, 17).string("Opening Stock");
  worksheet.cell(2, 18).string("Sales Quantity");
  worksheet.cell(2, 19).string("Closing Stock");
  worksheet.cell(2, 20).string("TR");
  worksheet.cell(2, 21).string("Closing Balance");
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
    i += 3;
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
    console.log("salesval", x.salesVal);
    totalSalesVal += x.salesVal;
    console.log("totalsalesval", totalSalesVal);
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
  // y++;
  // worksheet.cell(y, 1).string("Total");
  // worksheet.cell(y, 5).number(totalQty);
  // worksheet.cell(y, 6).number(totalPurchaseVal);
  // worksheet.cell(y, 9).number(totalAddittionVal);
  // worksheet.cell(y, 10).number(totalSalesVal);
  // worksheet.cell(y, 12).number(totalVatVal);
  // worksheet.cell(y, 13).number(totalRebate);
  // worksheet.cell(y, 14).number(totalAt);
  // worksheet.cell(y, 15).number(totalTrDeposite);
  // worksheet.cell(y, 17).number(totalSalesQty);
  // worksheet.cell(y, 19).number(totalTr);

  workbook.write("./print/Excel.xlsx");
  require("child_process").exec('start "" "G:\\BCB-App\\print"');
};
module.exports = saveToExcel;
