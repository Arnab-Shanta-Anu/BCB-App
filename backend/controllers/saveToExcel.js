const xl = require("excel4node");

const saveToExcel = (infos) => {
  var workbook = new xl.Workbook();

  // Add Worksheets to the workbook
  var worksheet = workbook.addWorksheet("Sheet 1");

  worksheet.cell(1, 1).string(infos.month);

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
  worksheet.cell(2, 10).string("Sales Value");
  worksheet.cell(2, 11).string("Vat %");
  worksheet.cell(2, 12).string("Vat Amount");
  worksheet.cell(2, 13).string("Rebate");
  worksheet.cell(2, 14).string("AT 5%");
  worksheet.cell(2, 15).string("TR Deposite");
  worksheet.cell(2, 16).string("Opening Stock");
  worksheet.cell(2, 17).string("Sales Quantity");
  worksheet.cell(2, 18).string("Closing Stock");
  worksheet.cell(2, 19).string("TR");
  worksheet.cell(2, 20).string("Closing Balance");

  infos.info.forEach((x, i) => {
    i += 3;
    let index = 1;
    worksheet.cell(i, index++).string(x.BE);
    worksheet.cell(i, index++).string(x.BEdate);
    worksheet.cell(i, index++).string(x.productName);
    worksheet.cell(i, index++).string(x.HScode);
    worksheet.cell(i, index++).number(x.quantity);
    worksheet.cell(i, index++).number(x.purchaseVal);
    worksheet.cell(i, index++).number(x.purchaseRate);
    worksheet.cell(i, index++).number(x.additionRate);
    worksheet.cell(i, index++).number(x.additionVal);
    worksheet.cell(i, index++).number(x.salesRate);
    worksheet.cell(i, index++).number(x.salesVal);
    worksheet.cell(i, index++).number(x.vatRate);
    worksheet.cell(i, index++).number(x.vatVal);
    worksheet.cell(i, index++).number(x.rebate);
    worksheet.cell(i, index++).number(x.at);
    worksheet.cell(i, index++).number(x.trDeposite);
    worksheet.cell(i, index++).number(x.openingStock);
    worksheet.cell(i, index++).number(x.salesQty);
    worksheet.cell(i, index++).number(x.closingStock);
    worksheet.cell(i, index++).number(x.tr);
    worksheet.cell(i, index++).number(x.closingBal);
  });

  workbook.write("./print/Excel.xlsx");
};
module.exports = saveToExcel;
