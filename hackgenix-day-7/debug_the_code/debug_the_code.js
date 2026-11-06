//Bug 1. The message always says adult.

let age = 15;
if (age === 18) {
  console.log("adult");
}

//Bug 2. The program stops with an error.

let total = 0;
for (let i = 1; i <= 3; i++) {
  total += i;
}

console.log("Total:", total);

// Bug 3. Adding 5 gives a strange answer.

let age1 = Number(prompt("Your age?"));
console.log(age + 5);

// Bug 4. The loop prints nothing useful and then an error.

for (let i = 1; i <= 3; i++) {
  console.log(i);
}

//Bug 5. The browser tab freezes.

let n = 5;

while (n > 0) {
  console.log(n);
  n--;
}

//Bug 6. Tuesday is printed together with Monday.
let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("weekdays");
}

//Bug 7. The first line gives an error.

let firstName = "Asha";
console.log(firstName);

//Bug 8. Nothing is printed and the Console is red.

console.log("Hello");
