function notZero(number) {
  number = +number;
  if (number === 0 || number == NaN || number == null) {
    number = 1;
  }
  return number;
}
function calculate() {
  for (let i = 0; i < count; i++) {
    let BEno = document.getElementById("BEno" + i);
    let date = document.getElementById("date" + i);
    let name = document.getElementById("name" + i);
    let HScode = document.getElementById("HScode" + i);
    let quantity = document.getElementById(`quantity${i}`);
    let purchaseVal = document.getElementById(`purchaseVal${i}`);
    let purchaseRate = document.getElementById(`purchaseRate${i}`);
    let additionRate = document.getElementById(`additionRate${i}`);
    let additionVal = document.getElementById(`additionVal${i}`);
    let salesRate = document.getElementById(`salesRate${i}`);
    let salesVal = document.getElementById(`salesVal${i}`);
    let vatRate = document.getElementById(`vatRate${i}`);
    let vatVal = document.getElementById(`vatVal${i}`);
    let rebate = document.getElementById(`rebate${i}`);
    let at = document.getElementById(`at${i}`);
    let trDeposite = document.getElementById(`trDeposite${i}`);
    let openingStock = document.getElementById(`openingStock${i}`);
    let salesQty = document.getElementById(`salesQty${i}`);
    let closingStock = document.getElementById(`closingStock${i}`);
    let tr = document.getElementById(`tr${i}`);
    let closingBal = document.getElementById(`closingBal${i}`);

    BEno = notZero(BEno.value);
    date = notZero(date.value);
    name = notZero(name.value);
    HScode = notZero(HScode.value);

    quantity = notZero(quantity.value);
    purchaseVal = notZero(purchaseVal.value);
    purchaseRate.value = (purchaseVal / notZero(parseFloat(quantity))).toFixed(
      2
    );
    purchaseRate = purchaseRate.value;
    additionRate = notZero(additionRate.value);

    additionVal.value = (
      parseFloat(purchaseRate) +
      parseFloat(purchaseRate * additionRate) / 100
    ).toFixed(2);

    salesRate.value = parseFloat(purchaseRate + Number(additionVal)).toFixed(2);
    salesRate = salesRate.value;
    salesVal.value = (salesRate * quantity).toFixed(2);
    salesVal = salesVal.value;
    let dropdown = document.getElementById(`vatRate${i}`);
    vatRate.value = dropdown.value;
    vatRate = vatRate.value;
    vatVal.value = ((salesVal * vatRate) / 100).toFixed(2);
    rebate.value =
      vatRate === "15"
        ? ((purchaseVal * 15) / 100).toFixed(2)
        : ((purchaseVal * 5) / 100).toFixed(2);

    at.value = ((purchaseVal * 5) / 100).toFixed(2);
    vatVal = vatVal.value;
    rebate = rebate.value;
    at = at.value;
    trDeposite.value = (vatVal - (parseFloat(rebate) + parseFloat(at))).toFixed(
      2
    );
    openingStock = notZero(openingStock.value);
    salesQty = notZero(salesQty.value);
    closingStock.value = (
      parseFloat(quantity) +
      parseFloat(openingStock) -
      salesQty
    ).toFixed(2);
    trDeposite = trDeposite.value;
    tr.value = ((trDeposite / notZero(quantity)) * salesQty).toFixed(2);
    closingStock = closingStock.value;
    closingBal.value = (
      ((parseFloat(rebate) + parseFloat(at)) / notZero(quantity)) *
      closingStock
    ).toFixed(2);
  }
}
function calculateTotal() {
  let totalQty = document.getElementById("totalQty");
  let totalPurchaseVal = document.getElementById("totalPurchaseVal");
  let totalAdditionVal = document.getElementById("totalAdditionVal");
  let totalSalesVal = document.getElementById("totalSalesVal");
  let totalVatVal = document.getElementById("totalVatVal");
  let totalRebate = document.getElementById("totalRebate");
  let totalAt = document.getElementById("totalAt");
  let totalTrDeposite = document.getElementById("totalTrDeposite");
  let totalSalesQty = document.getElementById("totalSalesQty");
  let totalTr = document.getElementById("totalTr");

  totalQty.value = 0.0;
  totalPurchaseVal.value = 0.0;
  totalAdditionVal.value = 0.0;
  totalSalesVal.value = 0.0;
  totalVatVal.value = 0.0;
  totalRebate.value = 0.0;
  totalAt.value = 0.0;
  totalTrDeposite.value = 0.0;
  totalSalesQty.value = 0.0;
  totalTr.value = 0.0;

  for (let i = 0; i < count; i++) {
    totalQty.value =
      parseFloat(totalQty.value) +
      parseFloat(document.getElementById("quantity" + i).value);
    totalPurchaseVal.value =
      parseFloat(totalPurchaseVal.value) +
      parseFloat(document.getElementById("purchaseVal" + i).value);
    totalAdditionVal.value =
      parseFloat(totalAdditionVal.value) +
      parseFloat(document.getElementById("additionVal" + i).value);
    console.log(totalAdditionVal.value);
    totalSalesVal.value =
      parseFloat(totalSalesVal.value) +
      parseFloat(document.getElementById("salesVal" + i).value);
    totalVatVal.value =
      parseFloat(totalVatVal.value) +
      parseFloat(document.getElementById("vatVal" + i).value);
    totalRebate.value =
      parseFloat(totalRebate.value) +
      parseFloat(document.getElementById("rebate" + i).value);
    totalAt.value =
      parseFloat(totalAt.value) +
      parseFloat(document.getElementById("at" + i).value);
    totalTrDeposite.value =
      parseFloat(totalTrDeposite.value) +
      parseFloat(document.getElementById("trDeposite" + i).value);
    totalSalesQty.value =
      parseFloat(totalSalesQty.value) +
      parseFloat(document.getElementById("salesQty" + i).value);
    totalTr.value =
      parseFloat(totalTr.value) +
      parseFloat(document.getElementById("tr" + i).value);
  }
}
document.addEventListener("keyup", (e) => {
  calculate();
  calculateTotal();
});
