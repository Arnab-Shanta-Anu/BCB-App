const addBtn = document.getElementById("add");
const addInput = document.querySelector(".addInput");
let count = 0;
addBtn.addEventListener("click", (e) => {
  let html = "";
  html += "<div class='side-by-side'>";
  html += `<div class='border'><input type='text' id='input${count}' value='1' style='width: 92px;'></div>`;
  count++;
  html += `<div class='border'><input type='date' id='input${count}' style='width: 98px;'></div>`;
  count++;
  for (let i = 0; i < 19; i++, count++) {
    html += `<div class='border'><input type='text' id='input${count}' value='1' style='width: 92px;'></div>`;
  }
  html += "</div>";
  addInput.innerHTML += html;
});
document.addEventListener("keyup", (e) => {
  for (let i = 0; i < count / 21; i++) {
    let BEno = document.getElementById("input" + (0 + i * 21)).value;
    let date = document.getElementById("input" + (1 + i * 21)).value;
    let name = document.getElementById("input" + (2 + i * 21)).value;
    let HScode = document.getElementById("input" + (3 + i * 21)).value;

    let quantity = document.getElementById("input" + (4 + i * 20)).value;
    let purchaseVal = document.getElementById("input" + (5 + i * 21)).value;
    let purchaseRate = (purchaseVal / parseFloat(quantity)).toFixed(2);
    document.getElementById("input" + (6 + i * 20)).value = purchaseRate;
    let additionRate = document.getElementById("input" + (7 + i * 21)).value;
    let additionVal = (
      parseFloat(purchaseRate) +
      (purchaseRate * additionRate) / 100
    ).toFixed(2);
    document.getElementById("input" + (8 + i * 21)).value = additionVal;
    let salesRate = (
      parseFloat(purchaseRate) + parseFloat(additionVal)
    ).toFixed(2);
    document.getElementById("input" + (9 + i * 21)).value = salesRate;
    let salesVal = (salesRate * quantity).toFixed(2);
    document.getElementById("input" + (10 + i * 21)).value = salesVal;
    let vatRate = document.getElementById("input" + (11 + i * 21)).value;
    let vatVal = ((salesVal * vatRate) / 100).toFixed(2);
    document.getElementById("input" + (12 + i * 21)).value = vatVal;
    let rebate = ((purchaseVal * 15) / 100).toFixed(2);
    document.getElementById("input" + (13 + i * 21)).value = rebate;
    let at = ((purchaseVal * 5) / 100).toFixed(2);
    document.getElementById("input" + (14 + i * 21)).value = at;
    let trDeposite = (vatVal - (parseFloat(rebate) + parseFloat(at))).toFixed(
      2
    );
    document.getElementById("input" + (15 + i * 21)).value = trDeposite;
    let openingStock = document.getElementById("input" + (16 + i * 21)).value;
    let salesQty = document.getElementById("input" + (17 + i * 21)).value;
    let closingStock = (
      parseFloat(quantity) +
      parseFloat(openingStock) -
      salesQty
    ).toFixed(2);
    document.getElementById("input" + (18 + i * 21)).value = closingStock;
    let tr = ((trDeposite / quantity) * salesQty).toFixed(2);
    document.getElementById("input" + (19 + i * 21)).value = tr;
    let closingBal = (
      ((parseFloat(rebate) + parseFloat(at)) / quantity) *
      closingStock
    ).toFixed(2);
    document.getElementById("input" + (20 + i * 21)).value = closingBal;
    //saving values
    document.getElementById("input" + (0 + i * 21)).setAttribute("value", BEno);
    document.getElementById("input" + (1 + i * 21)).setAttribute("value", date);
    document.getElementById("input" + (2 + i * 21)).setAttribute("value", name);
    document
      .getElementById("input" + (3 + i * 21))
      .setAttribute("value", HScode);
    document
      .getElementById("input" + (4 + i * 21))
      .setAttribute("value", quantity);
    document
      .getElementById("input" + (5 + i * 21))
      .setAttribute("value", purchaseVal);
    document
      .getElementById("input" + (6 + i * 21))
      .setAttribute("value", purchaseRate);
    document
      .getElementById("input" + (7 + i * 21))
      .setAttribute("value", additionRate);
    document
      .getElementById("input" + (8 + i * 21))
      .setAttribute("value", additionVal);
    document
      .getElementById("input" + (9 + i * 21))
      .setAttribute("value", salesRate);
    document
      .getElementById("input" + (10 + i * 21))
      .setAttribute("value", salesVal);
    document
      .getElementById("input" + (11 + i * 21))
      .setAttribute("value", vatRate);
    document
      .getElementById("input" + (12 + i * 21))
      .setAttribute("value", vatVal);
    document
      .getElementById("input" + (13 + i * 21))
      .setAttribute("value", rebate);
    document.getElementById("input" + (14 + i * 21)).setAttribute("value", at);
    document
      .getElementById("input" + (15 + i * 21))
      .setAttribute("value", trDeposite);
    document
      .getElementById("input" + (16 + i * 21))
      .setAttribute("value", openingStock);
    document
      .getElementById("input" + (17 + i * 21))
      .setAttribute("value", salesQty);
    document
      .getElementById("input" + (18 + i * 21))
      .setAttribute("value", closingStock);
    document.getElementById("input" + (19 + i * 21)).setAttribute("value", tr);
    document
      .getElementById("input" + (20 + i * 21))
      .setAttribute("value", closingBal);
  }
});
