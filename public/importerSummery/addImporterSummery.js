const addBtn = document.getElementById("add");
const addInp = document.getElementById("addInput");
let count = 0;

function addFields() {
  let html = "";
  html += "<div class='side-by-side'>";

  html += `<input type='text' id='BEno${count}' value='1' >`;
  html += `<input type='date' id='date${count}' style:'display: flex; flex-direction: row;'>`;
  html += `<input type='text' id='name${count}' value='1'>`;
  html += `<input type='text' id='HScode${count}'  value='1'>`;
  html += `<input type='text' id='quantity${count}' value='1'>`;
  html += `<input type='text' id='purchaseVal${count}' value='1'>`;
  html += `<input type='text' id='purchaseRate${count}' disabled>`;
  html += `<input type='text' id='additionRate${count}' value='1'>`;
  html += `<input type='text' id='additionVal${count}' disabled>`;
  html += `<input type='text' id='salesRate${count}' disabled>`;
  html += `<input type='text' id='salesVal${count}' disabled>`;
  //make vat rate a dropdown
  html += `<select id='vatRate${count}'>`;
  html += "<option value='0'>0%</option>";
  html += "<option value='5'>5%</option>";
  html += "<option value='7.5'>7.5%</option>";
  html += "<option value='10'>10%</option>";
  html += "<option value='15'>15%(rebate 15%)</option>";

  html += `<input type='text' style='display: none' disabled>`;

  // html += "";
  html += `<input type='text' id='vatVal${count}' disabled>`;
  html += `<input type='text' id='rebate${count}' disabled>`;
  html += `<input type='text' id='at${count}' disabled>`;
  html += `<input type='text' id='trDeposite${count}' disabled>`;
  html += `<input type='text' id='openingStock${count}' value='1'>`;
  html += `<input type='text' id='salesQty${count}' value='1'>`;
  html += `<input type='text' id='closingStock${count}' disabled>`;
  html += `<input type='text' id='tr${count}' disabled>`;
  html += `<input type='text' id='closingBal${count}' disabled>`;

  html += "</div>";
  return html;
}
function calculate() {
  for (let i = 0; i < count; i++) {
    const BEno = document.getElementById(`BEno${count}`);
    const date = document.getElementById(`date${count}`);
    const name = document.getElementById(`name${count}`);
    const HScode = document.getElementById(`HScode${count}`);
    const quantity = document.getElementById(`quantity${count}`);
    const purchaseVal = document.getElementById(`purchaseVal${count}`);
    const purchaseRate = document.getElementById(`purchaseRate${count}`);
    const additionRate = document.getElementById(`additionRate${count}`);
    const additionVal = document.getElementById(`additionVal${count}`);
    const salesRate = document.getElementById(`salesRate${count}`);
    const salesVal = document.getElementById(`salesVal${count}`);
    const vatRate = document.getElementById(`vatRate${count}`);
    const vatVal = document.getElementById(`vatVal${count}`);
    const rebate = document.getElementById(`rebate${count}`);
    const at = document.getElementById(`at${count}`);
    const trDeposite = document.getElementById(`trDeposite${count}`);
    const openingStock = document.getElementById(`openingStock${count}`);
    const salesQty = document.getElementById(`salesQty${count}`);
    const closingStock = document.getElementById(`closingStock${count}`);
    const tr = document.getElementById(`tr${count}`);
    const closingBal = document.getElementById(`closingBal${count}`);
  }
}
addBtn.addEventListener("click", (e) => {
  let html = addFields();
  addInp.innerHTML += html;
  const vatRate = document.getElementById(`vatRate${count}`);
  vatRate.addEventListener("change", (e) => {
    calculate();
  });
  count++;
});
document.addEventListener("keyup", (e) => {
  calculate();
});
