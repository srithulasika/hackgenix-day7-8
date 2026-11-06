//Use filter to get all even numbers from an array, and all words longer than 4 letters from another.

// even numbers

const numbers = [12, 7, 8, 15, 20, 33, 42, 9];
const result=numbers.filter((n)=>n%2===0);
console.log(result);

//Words longer than 4 letters:

const words = ["apple", "cat", "banana", "dog", "mango", "orange"];
const str=words.filter((word)=>word.length>4);
console.log(str);