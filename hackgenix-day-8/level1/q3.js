//Create an array of 5 fruits. Print the first, the last and the length. Add one at the start and one at the end, and remove one.

const fruits=["Apple","Banana","Grapes","Orange","Watermelon"];
// print the fruits
console.log(fruits);

// print the first fruit
console.log(fruits[0]);

// print the last fruit
console.log(fruits.length-1);

//print the length
console.log(fruits.length);

// add one fruit at the beginning
fruits.unshift("Strawberry");
console.log(fruits);

// add one fruit at the end
fruits.push("Guava");
console.log(fruits);

// remove one fruit
console.log(fruits.pop());