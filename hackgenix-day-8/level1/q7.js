//Add a new property to your object, delete another, and print the keys with Object.keys.


const obj={
    name:"Sri Thulasika",
    age:21,
    city:"Ramanathapuram",
    skills:["HTML","CSS","Java"]
};

obj.role="Trainee";

console.log(obj);

delete obj.city;

console.log(Object.keys(obj));