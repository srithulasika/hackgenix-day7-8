//Build an ATM menu with do...while and switch: 1 Balance, 2 Deposit, 3 Withdraw (no overdraft), 4Exit.

let balance = 5000;
let choice;
let amount;
let withdrawal_amount;

do {
  console.log("***ATM Menu***");
  console.log("1.Balance");
  console.log("2.Deposit");
  console.log("3.Withdraw");
  console.log("4.Exit");

  choice = Number(prompt("Enter your choice:"));

  switch (choice) {
    case 1:
      console.log(`Balance amount: ${balance}`);
      break;

    case 2:
      amount = Number(prompt("Enter your deposit amount"));
      balance = amount + balance;
      console.log(`Your amount deposited successfully`);
      console.log(`Your new balance amount is ${balance}`);
      break;

    case 3:
      withdrawal_amount = Number(prompt("Enter your withdrawal amount"));
      if (withdrawal_amount <= balance && withdrawal_amount > 0) {
        balance = balance - withdrawal_amount;
        console.log("Your new balance:", balance);
      } else {
        console.log("Insufficient balance! No overdraft allowed.");
      }
      break;

    case 4:
      console.log("Thank you for using our ATM!");
      break;
    default:
      console.log("Invalid choice! Please try again.");
  }
} while (choice !== 4);
