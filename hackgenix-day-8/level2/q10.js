//Write a function that receives an object and returns a text with one 'key: value' line per property, using Object.entries.

const student = {
    name: "Priya",
    age: 21,
    city: "Chennai",
    course: "Computer Science"
};
const result = Object.entries(student)
    .map(([key, value]) => {
        return `${key}: ${value}`;
    })
    .join("\n");

console.log(result);