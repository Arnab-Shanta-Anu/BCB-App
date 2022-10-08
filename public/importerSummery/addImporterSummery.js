const addBtn = document.getElementById("add");
const addInp = document.getElementById("addInput");
let count = 0;

function notZero(number) {
  number = +number;
  if (number === 0 || number == NaN || number == null) {
    number = 1;
  }
  return number;
}
function addFields() {
  const BEno = document.createElement("input");
  BEno.type = "text";
  BEno.id = "BEno" + count;

  const wrapper = document.createElement("div");
  const date = document.createElement("input");
  date.type = "date";
  date.id = "date" + count;
  wrapper.appendChild(date);

  const name = document.createElement("input");
  name.type = "text";
  name.id = "name" + count;

  const HScode = document.createElement("input");
  HScode.type = "text";
  HScode.id = "HScode" + count;

  const quantity = document.createElement("input");
  quantity.type = "text";
  quantity.id = "quantity" + count;

  const purchaseVal = document.createElement("input");
  purchaseVal.type = "text";
  purchaseVal.id = "purchaseVal" + count;

  const purchaseRate = document.createElement("input");
  purchaseRate.type = "text";
  purchaseRate.disabled = true;
  purchaseRate.id = "purchaseRate" + count;

  const additionRate = document.createElement("input");
  additionRate.type = "text";
  additionRate.id = "additionRate" + count;

  const additionVal = document.createElement("input");
  additionVal.type = "text";
  additionVal.disabled = true;
  additionVal.id = "additionVal" + count;
  additionVal.value = "1";

  const salesRate = document.createElement("input");
  salesRate.type = "text";
  salesRate.id = "salesRate" + count;

  const salesVal = document.createElement("input");
  salesVal.type = "text";
  salesVal.id = "salesVal" + count;

  const vatWrapper = document.createElement("div");
  const vatRate = document.createElement("select");
  vatRate.id = "vatRate" + count;
  const options = ["0", "5", "7.5", "10", "15"];
  options.forEach((optn) => {
    let option = document.createElement("option");
    option.value = optn;
    option.text = optn + "%";
    vatRate.appendChild(option);
  });
  vatWrapper.className = "wrapper";
  vatWrapper.appendChild(vatRate);

  const vatVal = document.createElement("input");
  vatVal.type = "text";
  vatVal.id = "vatVal" + count;

  const rebate = document.createElement("input");
  rebate.type = "text";
  rebate.id = "rebate" + count;

  const at = document.createElement("input");
  at.type = "text";
  at.id = "at" + count;

  const trDeposite = document.createElement("input");
  trDeposite.type = "text";
  trDeposite.id = "trDeposite" + count;

  const openingStock = document.createElement("input");
  openingStock.type = "text";
  openingStock.id = "openingStock" + count;

  const salesQty = document.createElement("input");
  salesQty.type = "text";
  salesQty.id = "salesQty" + count;

  const closingStock = document.createElement("input");
  closingStock.type = "text";
  closingStock.id = "closingStock" + count;

  const tr = document.createElement("input");
  tr.type = "text";
  tr.id = "tr" + count;

  const closingBal = document.createElement("input");
  closingBal.type = "text";
  closingBal.id = "closingBal" + count;

  const container = document.createElement("div");
  container.className = "side-by-side";

  addInp.appendChild(container);
  container.appendChild(BEno);
  container.appendChild(wrapper);
  container.appendChild(name);
  container.appendChild(HScode);
  container.appendChild(quantity);
  container.appendChild(purchaseVal);
  container.appendChild(purchaseRate);
  container.appendChild(additionRate);
  container.appendChild(additionVal);
  container.appendChild(salesRate);
  container.appendChild(salesVal);
  container.appendChild(vatWrapper);
  container.appendChild(vatVal);
  container.appendChild(rebate);
  container.appendChild(at);
  container.appendChild(trDeposite);
  container.appendChild(openingStock);
  container.appendChild(salesQty);
  container.appendChild(closingStock);
  container.appendChild(tr);
  container.appendChild(closingBal);
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
      vatRate === 15
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
addBtn.addEventListener("click", (e) => {
  addFields();
  const vatRate = document.getElementById(`vatRate${count}`);
  vatRate.addEventListener("change", (e) => {
    calculate();
  });
  count++;
});
document.addEventListener("keyup", (e) => {
  calculate();
});
