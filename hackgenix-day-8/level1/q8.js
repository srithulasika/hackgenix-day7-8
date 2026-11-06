//Convert your object to JSON text with stringify and back to an object with parse.


const obj={
    name:"Sri Thulasika",
    age:21,
    city:"Ramanathapuram",
    skills:["HTML","CSS","Java"]
};

const jsonData=JSON.stringify(obj);

const objData=JSON.parse(jsonData);

console.log(`json: ${jsonData}`);
console.log("object:",objData);