//Use map to convert an array of Celsius temperatures to Fahrenheit.

const celsius=[30,40,23,45];
const fahrenheit=celsius.map((c)=>(c*9/5)+32);
console.log(fahrenheit);