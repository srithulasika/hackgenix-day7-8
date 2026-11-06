/*
let Price = 500
const quantity = 3;
let discount;
if (quantity = 3) {
discount = 0.1;
}
let total = Price * quantity - discount;
console.log("Total is " + total.toFixed(2);*/

//  Corrected code:

const price = 500;
const quantity=3;
let discount=0;
if(discount === 3){
    discount = 0.1;
}
const subtotal = price * quantity;
const discountAmount = subtotal * discount;
const total = subtotal - discountAmount;

console.log("Total is " + total.toFixed(2))
