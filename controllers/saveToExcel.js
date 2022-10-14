const xl = require("excel4node");

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
  worksheet.cell(2, 1).string(infos.info[0].BE);
  worksheet.cell(2, 2).string(infos.info[0].BE);
  worksheet.cell(2, 3).string(infos.info[0].BE);
  worksheet.cell(2, 4).string(infos.info[0].BE);
  worksheet.cell(2, 5).string(infos.info[0].BE);
  worksheet.cell(2, 6).string(infos.info[0].BE);
  worksheet.cell(2, 7).string(infos.info[0].BE);
  worksheet.cell(2, 8).string(infos.info[0].BE);
  worksheet.cell(2, 9).string(infos.info[0].BE);
  worksheet.cell(2, 10).string(infos.info[0].BE);
  worksheet.cell(2, 11).string(infos.info[0].BE);
  worksheet.cell(2, 12).string(infos.info[0].BE);
  worksheet.cell(2, 13).string(infos.info[0].BE);
  worksheet.cell(2, 14).string(infos.info[0].BE);
  worksheet.cell(2, 15).string(infos.info[0].BE);
  worksheet.cell(2, 16).string(infos.info[0].BE);
  worksheet.cell(2, 17).string(infos.info[0].BE);
  worksheet.cell(2, 18).string(infos.info[0].BE);
  worksheet.cell(2, 19).string(infos.info[0].BE);
  worksheet.cell(2, 20).string(infos.info[0].BE);
  worksheet.cell(2, 21).string(infos.info[0].BE);

  workbook.write("./print/Excel.xlsx");
};
module.exports = saveToExcel;
