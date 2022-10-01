const addBtn = document.getElementById("add");
const addInput = document.querySelector(".addInput");

function notZero(number) {
  number = +number;
  if (number === 0 || number == NaN) {
    number = 1;
  }
  return number;
}

let count = 0;
addBtn.addEventListener("click", (e) => {
  let html = "";
  html += "<div class='side-by-side'>";

  html += `<div class='border'><input type='text' id='BEno${count}' value='1' style='width: 92px;'></div>`;
  html += `<div class='border'><input type='date' id='date${count}' style='width: 98px;'></div>`;
  html += `<div class='border'><input type='text' id='name${count}' value='1' style='width: 92px;'></div>`;
  html += `<div class='border'><input type='text' id='HScode${count}'  value='1' style='width: 92px;'></div>`;
  html += `<div class='border'><input type='text' id='quantity${count}' value='1' style='width: 92px;'></div>`;
  html += `<div class='border'><input type='text' id='purchaseVal${count}' value='1' style='width: 92px;'></div>`;
  html += `<div class='border'><input type='text' id='purchaseRate${count}' style='width: 92px;' disabled></div>`;
  html += `<div class='border'><input type='text' id='additionRate${count}' value='1' style='width: 92px;'></div>`;
  html += `<div class='border'><input type='text' id='additionVal${count}' style='width: 92px;' disabled></div>`;
  html += `<div class='border'><input type='text' id='salesRate${count}' style='width: 92px;' disabled></div>`;
  html += `<div class='border'><input type='text' id='salesVal${count}' style='width: 92px;' disabled></div>`;
  //make vat rate a dropdown
  html += `<div class='border'><select id='vatRate${count}' style='width: 92px;'></div>`;
  html += "<option value='volvo'>Volvo</option>";
  html += "<option value='saab'>Saab</option>";
  html += "<option value='mercedes'>Mercedes</option>";
  html += "<option value='audi'>Audi</option>";
  html += `<div class='border'><input type='text' id='vatVal${count}' style='width: 92px; display: none' disabled></div>`;

  // html += "</div>";
  html += `<div class='border'><input type='text' id='vatVal${count}' style='width: 92px;' disabled></div>`;
  html += `<div class='border'><input type='text' id='rebate${count}' style='width: 92px;' disabled></div>`;
  html += `<div class='border'><input type='text' id='at${count}' style='width: 92px;' disabled></div>`;
  html += `<div class='border'><input type='text' id='trDeposite${count}' style='width: 92px;' disabled></div>`;
  html += `<div class='border'><input type='text' id='openingStock${count}' value='1' style='width: 92px;'></div>`;
  html += `<div class='border'><input type='text' id='salesQty${count}' value='1' style='width: 92px;'></div>`;
  html += `<div class='border'><input type='text' id='closingStock${count}' style='width: 92px;' disabled></div>`;
  html += `<div class='border'><input type='text' id='tr${count}' style='width: 92px;' disabled></div>`;
  html += `<div class='border'><input type='text' id='closingBal${count}' style='width: 92px;' disabled></div>`;

  html += "</div>";
  addInput.innerHTML += html;
  count++;
});
document.addEventListener("keyup", (e) => {
  for (let i = 0; i < count / 21; i++) {
    let BEno = document.getElementById(`BEno${i}`).value;
    let date = document.getElementById(`date${i}`).value;
    let name = document.getElementById(`name${i}`).value;
    let HScode = document.getElementById(`HScode${i}`).value;

    let quantity = document.getElementById(`quantity${i}`).value;
    let purchaseVal = document.getElementById(`purchaseVal${i}`).value;
    let purchaseRate = (purchaseVal / notZero(parseFloat(quantity))).toFixed(2);
    document.getElementById(`purchaseRate${i}`).value = purchaseRate;
    let additionRate = document.getElementById(`additionRate${i}`).value;
    let additionVal = (
      parseFloat(purchaseRate) +
      (purchaseRate * additionRate) / 100
    ).toFixed(2);
    document.getElementById(`additionVal${i}`).value = additionVal;
    let salesRate = (
      parseFloat(purchaseRate) + parseFloat(additionVal)
    ).toFixed(2);
    document.getElementById(`salesRate${i}`).value = salesRate;
    let salesVal = (salesRate * quantity).toFixed(2);
    document.getElementById(`salesVal${i}`).value = salesVal;
    let vatRate = document.getElementById(`vatRate${i}`).value;
    let vatVal = ((salesVal * vatRate) / 100).toFixed(2);
    document.getElementById(`vatVal${i}`).value = vatVal;
    let rebate = ((purchaseVal * 15) / 100).toFixed(2);
    document.getElementById(`rebate${i}`).value = rebate;
    let at = ((purchaseVal * 5) / 100).toFixed(2);
    document.getElementById(`at${i}`).value = at;
    let trDeposite = (vatVal - (parseFloat(rebate) + parseFloat(at))).toFixed(
      2
    );
    document.getElementById(`trDeposite${i}`).value = trDeposite;
    let openingStock = document.getElementById(`openingStock${i}`).value;
    let salesQty = document.getElementById(`salesQty${i}`).value;
    let closingStock = (
      parseFloat(quantity) +
      parseFloat(openingStock) -
      salesQty
    ).toFixed(2);
    document.getElementById(`closingStock${i}`).value = closingStock;
    let tr = ((trDeposite / notZero(quantity)) * salesQty).toFixed(2);
    document.getElementById(`tr${i}`).value = tr;
    let closingBal = (
      ((parseFloat(rebate) + parseFloat(at)) / notZero(quantity)) *
      closingStock
    ).toFixed(2);
    document.getElementById(`closingBal${i}`).value = closingBal;

    //saving values
    document.getElementById(`BEno${i}`).setAttribute("value", BEno);
    document.getElementById(`date${i}`).setAttribute("value", date);
    document.getElementById(`name${i}`).setAttribute("value", name);
    document.getElementById(`HScode${i}`).setAttribute("value", HScode);
    document.getElementById(`quantity${i}`).setAttribute("value", quantity);
    document
      .getElementById(`purchaseVal${i}`)
      .setAttribute("value", purchaseVal);
    document
      .getElementById(`purchaseRate${i}`)
      .setAttribute("value", purchaseRate);
    document
      .getElementById(`additionRate${i}`)
      .setAttribute("value", additionRate);
    document
      .getElementById(`additionVal${i}`)
      .setAttribute("value", additionVal);
    document.getElementById(`salesRate${i}`).setAttribute("value", salesRate);
    document.getElementById(`salesVal${i}`).setAttribute("value", salesVal);
    document.getElementById(`vatRate${i}`).setAttribute("value", vatRate);
    document.getElementById(`vatVal${i}`).setAttribute("value", vatVal);
    document.getElementById(`rebate${i}`).setAttribute("value", rebate);
    document.getElementById(`at${i}`).setAttribute("value", at);
    document.getElementById(`trDeposite${i}`).setAttribute("value", trDeposite);
    document
      .getElementById(`openingStock${i}`)
      .setAttribute("value", openingStock);
    document.getElementById(`salesQty${i}`).setAttribute("value", salesQty);
    document
      .getElementById(`closingStock${i}`)
      .setAttribute("value", closingStock);
    document.getElementById(`tr${i}`).setAttribute("value", tr);
    document.getElementById(`closingBal${i}`).setAttribute("value", closingBal);
  }
});
