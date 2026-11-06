//Print a pyramid with spaces and stars for any height the user enters.

let height = Number(prompt("Enter a height:"));
for (let i = 1; i <= height; i++) {
  let row = "";
  for (let j = 1; j <= height - i; j++) {
    row += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    row += "*";
  }
  console.log(row);
}
