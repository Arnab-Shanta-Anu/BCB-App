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

addBtn.addEventListener("click", (e) => {
  addFields();
  const vatRate = document.getElementById(`vatRate${count}`);
  vatRate.addEventListener("change", (e) => {
    calculate();
  });
  count++;
});
