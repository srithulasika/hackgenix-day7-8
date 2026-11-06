//Remove duplicates from an array in two ways: filter with indexOf, and new Set.

const numbers = [10, 20, 10, 30, 40, 20, 50, 30];
const result=numbers.filter((value,index) =>
{
    return index===numbers.indexOf(value);

});
console.log(`Array without duplicates: ${result}`);

// using set

const arr=[10,24,27,10,24];
const uniqueArray=[...new Set(arr)];
console.log(`Array without duplicates using set() : ${uniqueArray}`);