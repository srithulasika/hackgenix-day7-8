//Group an array of students by grade into an object of arrays using reduce.

const students = [
    { name: "Arun", grade: "A" },
    { name: "Priya", grade: "B" },
    { name: "Kavin", grade: "A" },
    { name: "Divya", grade: "C" },
    { name: "Rahul", grade: "B" },
    { name: "Meena", grade: "A" }
];

const result=students.reduce((acc,student)=>{
    if(!acc[student.grade]){
        acc[student.grade]=[];
    }
    acc[student.grade].push(student.name);
    return acc;
},{});

console.log(result);