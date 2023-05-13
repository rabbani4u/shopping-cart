let incrementBtn = document.getElementById("case-increment");
incrementBtn.addEventListener("click", function () {
  // let caseInput = document.getElementById("case-count");
  // let caseCount = parseInt(caseInput.value);
  // let newCount = caseCount + 1;
  // caseInput.value = newCount;
  // const caseTotal = newCount * 50;
  // document.getElementById("case-total").innerText = caseTotal;
  handlePrductChange(true);
  calculateTotal();
});

let decrementBtn = document.getElementById("case-decrement");
decrementBtn.addEventListener("click", function () {
  handlePrductChange(false);
  calculateTotal();
});

function handlePrductChange(isIncrease) {
  let caseInput = document.getElementById("case-count");
  let caseCount = parseInt(caseInput.value);
  let newCount = caseCount;
  if (isIncrease == true) {
    newCount = caseCount + 1;
  }
  if (isIncrease == false && caseCount > 0) {
    newCount = caseCount - 1;
  }
  caseInput.value = newCount;
  const caseTotal = newCount * 50;
  document.getElementById("case-total").innerText = caseTotal;
}

// phone section

document
  .getElementById("phone-increment")
  .addEventListener("click", function () {
    // const phoneInput = document.getElementById("phone-count");
    // const phoneCount = parseInt(phoneInput.value);
    // const phoneNewCount = phoneCount + 1;
    // phoneInput.value = phoneNewCount;
    // const phoneTotal = phoneNewCount * 1219;
    // document.getElementById("phone-total").innerText = phoneTotal;
    handlePhoneChange(true);
    calculateTotal();
  });
document
  .getElementById("phone-decrement")
  .addEventListener("click", function () {
    // const phoneInput = document.getElementById("phone-count");
    // const phoneCount = parseInt(phoneInput.value);
    // const phoneNewCount = phoneCount - 1;
    // phoneInput.value = phoneNewCount;
    // const phoneTotal = phoneNewCount * 1219;
    // document.getElementById("phone-total").innerText = phoneTotal;
    handlePhoneChange(false);
    calculateTotal();
  });

function handlePhoneChange(inIncrease) {
  const phoneInput = document.getElementById("phone-count");
  // console.log(phoneInput.value);
  const phoneCount = parseInt(phoneInput.value);
  let newCount = phoneCount;
  if (inIncrease == true) {
    newCount = phoneCount + 1;
  }
  if (inIncrease == false && phoneCount > 0) {
    newCount = phoneCount - 1;
  }
  phoneInput.value = newCount;
  const phoneTotal = newCount * 1219;

  document.getElementById("phone-total").innerText = phoneTotal;
}

//Subtotal Calculation
function calculateTotal() {
  const phoneInput = document.getElementById("phone-count");
  const phoneCount = parseInt(phoneInput.value);

  const caseInput = document.getElementById("case-count");
  const caseCount = parseInt(caseInput.value);

  const subTotal = phoneCount * 1219 + caseCount * 50;
  document.getElementById("subtotal").innerText = subTotal;
  const taxAmount = 0.01 * subTotal;
  document.getElementById("tax-amount").innerText = taxAmount;
  const grandTotal = subTotal + taxAmount;
  document.getElementById("grand-total").innerText = grandTotal;
}
