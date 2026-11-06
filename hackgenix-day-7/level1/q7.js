//Print the multiplication table of a number entered by the user.

let num=Number(prompt("Enter the number of a multiplication table you want:"));
const n=10;
for(let i=1;i<=n;i++){
    console.log(`${num} * ${i} = ${(num * i)}`);
}