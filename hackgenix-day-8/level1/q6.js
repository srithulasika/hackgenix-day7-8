//Create an object for yourself (name, age, city, skills array). Print each property using dot and bracket notation.

const obj={
    name:"Sri Thulasika",
    age:21,
    city:"Ramanathapuram",
    skills:["HTML","CSS","Java"]
};


console.log("** Dot notation **");
console.log(`Name: ${obj.name}`);
console.log(`Age: ${obj.age}`);
console.log(`City: ${obj.city}`);
console.log(`Skills:${obj.skills}`);

console.log("** bracket notation **");
console.log(obj["name"]);
console.log(obj["age"]);
console.log(obj["city"]);
console.log(obj["skills"]);

