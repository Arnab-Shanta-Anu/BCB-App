const addBtn = document.getElementById("add");
const addInp = document.getElementById("addInput");
let count = 0;

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
  purchaseVal.id = "purchaseVa" + count;

  const purchaseRate = document.createElement("input");
  purchaseRate.type = "text";
  purchaseRate.id = "purchaseRate" + count;

  const additionRate = document.createElement("input");
  additionRate.type = "text";
  additionRate.id = "additionRate" + count;

  const additionVal = document.createElement("input");
  additionVal.type = "text";
  additionVal.id = "additionVal" + count;

  const salesRate = document.createElement("input");
  salesRate.type = "text";
  salesRate.id = "salesRate" + count;

  const salesVal = document.createElement("input");
  salesVal.type = "text";
  salesVal.id = "salesVal" + count;

  const vatWrapper = document.createElement("div");
  const vatRate = document.createElement("select");
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
  vatVal.id = "" + count;

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
  closingBal.id = "closigBal" + count;

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
    let BEno = document.getElementById(`BEno${count}`);
    let date = document.getElementById(`date${count}`);
    let name = document.getElementById(`name${count}`);
    let HScode = document.getElementById(`HScode${count}`);
    let quantity = document.getElementById(`quantity${count}`);
    let purchaseVal = document.getElementById(`purchaseVal${count}`);
    let purchaseRate = document.getElementById(`purchaseRate${count}`);
    let additionRate = document.getElementById(`additionRate${count}`);
    let additionVal = document.getElementById(`additionVal${count}`);
    let salesRate = document.getElementById(`salesRate${count}`);
    let salesVal = document.getElementById(`salesVal${count}`);
    let vatRate = document.getElementById(`vatRate${count}`);
    let vatVal = document.getElementById(`vatVal${count}`);
    let rebate = document.getElementById(`rebate${count}`);
    let at = document.getElementById(`at${count}`);
    let trDeposite = document.getElementById(`trDeposite${count}`);
    let openingStock = document.getElementById(`openingStock${count}`);
    let salesQty = document.getElementById(`salesQty${count}`);
    let closingStock = document.getElementById(`closingStock${count}`);
    let tr = document.getElementById(`tr${count}`);
    let closingBal = document.getElementById(`closingBal${count}`);

    BEno = BEno.value;
    date = date.value;
    name = name.value;
    HScode = HScode.value;

    quantity = quantity.value;
    purchaseVal = purchaseVal.value;
    purchaseRate.value = (purchaseVal / notZero(parseFloat(quantity))).toFixed(
      2
    );
    additionRate = additionRate.value;
    additionVal.value = (
      parseFloat(purchaseRate) +
      (purchaseRate * additionRate) / 100
    ).toFixed(2);
    salesRate.value = (
      parseFloat(purchaseRate) + parseFloat(additionVal)
    ).toFixed(2);
    salesVal.value = (salesRate * quantity).toFixed(2);
    let dropdown = document.getElementById(`vatRate${i}`);
    vatRate.value = dropdown.value;

    vatVal.value = ((salesVal * vatRate) / 100).toFixed(2);
    rebate.value =
      vatRate === 15
        ? ((purchaseVal * 15) / 100).toFixed(2)
        : ((purchaseVal * 5) / 100).toFixed(2);
    at.value = ((purchaseVal * 5) / 100).toFixed(2);
    trDeposite.value = (vatVal - (parseFloat(rebate) + parseFloat(at))).toFixed(
      2
    );
    openingStock = openingStock.value;
    salesQty = salesQty.value;
    closingStock.value = (
      parseFloat(quantity) +
      parseFloat(openingStock) -
      salesQty
    ).toFixed(2);
    tr.value = ((trDeposite / notZero(quantity)) * salesQty).toFixed(2);
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
