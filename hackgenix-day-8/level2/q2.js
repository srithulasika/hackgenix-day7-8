//Write a function that takes a price and a GST percent (default 18) and returns the final price.

function finalPrice(amount,gst=18){
    let finalPrice=amount + (amount*gst)/100;
    return finalPrice;
}

const result=finalPrice(1000);
const result1=finalPrice(1050,5);
console.log(`FinalPrice: ${result}`);
console.log(`FinalPrice: ${result1}`);