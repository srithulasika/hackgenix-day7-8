//Q1
function add(a, b) {
  return a + b;
}
let r = add(1, 2);
console.log(r + 1);

//Q2
const greet = () => "Hi";
console.log(greet());

//Q3
const nums = [10, 9, 1, 100];
nums.sort((a, b) => a - b);
console.log(nums);

//Q4
const prices = [];
const total = prices.reduce((s, p) => s + p, 0);
console.log(total);

//Q5
const student = {name: "Asha"};
console.log(student.name);

//Q6
const data = JSON.parse('{"name":"Asha"}');

//Q7
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original);

//Q8
const person = {
  name: "Ravi",
  show() {
    console.log(this.name);
  },
};
person.show();
