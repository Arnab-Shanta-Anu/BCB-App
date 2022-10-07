const addBtn = document.getElementById("add");
const addInput = document.querySelector(".addInput");

let count = 0;

function notZero(number) {
  number = +number;
  if (number === 0 || number == NaN) {
    number = 1;
  }
  return number;
}
function addFields() {
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
  html += "<option value='0'>0%</option>";
  html += "<option value='5'>5%</option>";
  html += "<option value='7.5'>7.5%</option>";
  html += "<option value='10'>10%</option>";
  html += "<option value='15'>15%(rebate 15%)</option>";

  html += `<div class='border'><input type='text' style='width: 92px; display: none' disabled></div>`;

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
  return html;
}
function saveValue(i, fields) {
  sessionStorage.setItem(`BEno${i}`, fields.BEno);
  sessionStorage.setItem(`date${i}`, fields.date);
  sessionStorage.setItem(`name${i}`, fields.name);
  sessionStorage.setItem(`HScode${i}`, fields.HScode);
  sessionStorage.setItem(`quantity${i}`, fields.quantity);
  sessionStorage.setItem(`purchaseVal${i}`, fields.purchaseVal);
  sessionStorage.setItem(`purchaseRate${i}`, fields.purchaseRate);
  sessionStorage.setItem(`additionRate${i}`, fields.additionRate);
  sessionStorage.setItem(`additionVal${i}`, fields.additionVal);
  sessionStorage.setItem(`salesRate${i}`, fields.salesRate);
  sessionStorage.setItem(`salesVal${i}`, fields.salesVal);
  sessionStorage.setItem(`vatRate${i}`, fields.vatRate);
  sessionStorage.setItem(`vatVal${i}`, fields.vatVal);
  sessionStorage.setItem(`rebate${i}`, fields.rebate);
  sessionStorage.setItem(`at${i}`, fields.at);
  sessionStorage.setItem(`trDeposite${i}`, fields.trDeposite);
  sessionStorage.setItem(`$openingStock${i}`, fields.openingStock);
  sessionStorage.setItem(`salesQty${i}`, fields.salesQty);
  sessionStorage.setItem(`closingStock${i}`, fields.closingStock);
  sessionStorage.setItem(`tr${i}`, fields.tr);
  sessionStorage.setItem(`closingBal${i}`, fields.closingBal);

  document
    .getElementById(`BEno${i}`)
    .setAttribute("value", sessionStorage.getItem(`BEno${i}`));
  document
    .getElementById(`date${i}`)
    .setAttribute("value", sessionStorage.getItem(`date${i}`));
  document
    .getElementById(`name${i}`)
    .setAttribute("value", sessionStorage.getItem(`name${i}`));
  document
    .getElementById(`HScode${i}`)
    .setAttribute("value", sessionStorage.getItem(`HScode${i}`));
  document
    .getElementById(`quantity${i}`)
    .setAttribute("value", sessionStorage.getItem(`quantity${i}`));
  document
    .getElementById(`purchaseVal${i}`)
    .setAttribute("value", sessionStorage.getItem(`purchaseVal${i}`));
  document
    .getElementById(`purchaseRate${i}`)
    .setAttribute("value", sessionStorage.getItem(`purchaseRate${i}`));
  document
    .getElementById(`additionRate${i}`)
    .setAttribute("value", sessionStorage.getItem(`additionRate${i}`));
  document
    .getElementById(`additionVal${i}`)
    .setAttribute("value", sessionStorage.getItem(`additionVal${i}`));
  document
    .getElementById(`salesRate${i}`)
    .setAttribute("value", sessionStorage.getItem(`salesRate${i}`));
  document
    .getElementById(`salesVal${i}`)
    .setAttribute("value", sessionStorage.getItem(`salesVal${i}`));
  document
    .getElementById(`vatRate${i}`)
    .setAttribute("value", sessionStorage.getItem(`vatRate${i}`));
  document
    .getElementById(`vatVal${i}`)
    .setAttribute("value", sessionStorage.getItem(`vatVal${i}`));
  document
    .getElementById(`rebate${i}`)
    .setAttribute("value", sessionStorage.getItem(`rebate${i}`));
  document
    .getElementById(`at${i}`)
    .setAttribute("value", sessionStorage.getItem(`at${i}`));
  document
    .getElementById(`trDeposite${i}`)
    .setAttribute("value", sessionStorage.getItem(`trDeposite${i}`));
  document
    .getElementById(`openingStock${i}`)
    .setAttribute("value", sessionStorage.getItem(`openingStock${i}`));
  document
    .getElementById(`salesQty${i}`)
    .setAttribute("value", sessionStorage.getItem(`salesQty${i}`));
  document
    .getElementById(`closingStock${i}`)
    .setAttribute("value", sessionStorage.getItem(`closingStock${i}`));
  document
    .getElementById(`tr${i}`)
    .setAttribute("value", sessionStorage.getItem(`tr${i}`));
  document
    .getElementById(`closingBal${i}`)
    .setAttribute("value", sessionStorage.getItem(`closingBal${i}`));
}

addBtn.addEventListener("click", (e) => {
  addInput.innerHTML += addFields();
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
    let dropdown = document.getElementById(`vatRate${i}`);
    let vatRate = dropdown.value;

    let vatVal = ((salesVal * vatRate) / 100).toFixed(2);
    document.getElementById(`vatVal${i}`).value = vatVal;
    let rebate =
      vatRate === "percent15"
        ? ((purchaseVal * 15) / 100).toFixed(2)
        : ((purchaseVal * 5) / 100).toFixed(2);
    document.getElementById(`rebate${i}`).value = rebate;
    let at = ((purchaseVal * 5) / 100).toFixed(2);
    document.getElementById(`at${i}`).value = at;
    let trDeposite = (vatVal - (parseFloat(rebate) + parseFloat(at))).toFixed(
      2
    );
    document.getElementById(`trDeposite${i}`).value = trDeposite;
    let openingStock = document.getElementById(`openingStock${i}`).value;
    console.log(openingStock);
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

    //saving values using session storage
    let fields = {
      BEno,
      date,
      name,
      HScode,
      quantity,
      purchaseVal,
      purchaseRate,
      additionRate,
      additionVal,
      salesRate,
      salesVal,
      vatRate,
      vatVal,
      rebate,
      at,
      trDeposite,
      openingStock,
      salesQty,
      closingStock,
      tr,
      closingBal,
    };
    saveValue(i, fields);
  }
});
