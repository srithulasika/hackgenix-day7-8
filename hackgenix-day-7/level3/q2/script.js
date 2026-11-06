const principalInput = document.getElementById("principal");
const interestInput = document.getElementById("interest");
const timeInput = document.getElementById("time");
const result = document.getElementById("result");
const message = document.getElementById("message");
const calculateButton = document.getElementById("calculateBtn");
const clearButton = document.getElementById("clearBtn");

calculateButton.addEventListener("click", function () {
  const principal = Number(principalInput.value);
  const interest = Number(interestInput.value);
  const time = Number(timeInput.value);
  if (
    principalInput.value === "" ||
    interestInput.value === "" ||
    timeInput.value === "" ||
    principal <= 0 ||
    interest <= 0 ||
    time <= 0
  ) {
    message.textContent = "Please enter valid positive values";
    return;
  } else {
    const simpleInterest = (principal * interest * time) / 100;
    const totalAmount = principal + simpleInterest;
    result.textContent = `Simple Interest: ₹${simpleInterest.toFixed(2)}
Total Amount: ₹${totalAmount.toFixed(2)}`;
    message.textContent = "Calculation completed successfully";
  }
});

clearButton.addEventListener("click", function () {
  principalInput.value = "";
  interestInput.value = "";
  timeInput.value = "";
  result.textContent = "";
  message.textContent = "";
});
