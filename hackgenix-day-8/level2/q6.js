//Sort numbers ascending and descending, names alphabetically, and an array of student objects by marks.

//sort names alphabetically

const names = ["Sathya", "Arun", "Priya", "Karthik"];
names.sort();
console.log(`Sorted Names: ${names}`);

// sort numbers both ascending and descending

const numbers = [45, 12, 89, 7, 34, 56];
const ascending=numbers.sort((a,b)=>a-b);

const copy=[...numbers];
const descending=copy.sort((a,b)=>b-a);
console.log(`Ascending order: ${ascending}`);
console.log(`Descending order: ${descending}`);


//sort student objects by marks

const students = [
    { name: "Arun", marks: 75 },
    { name: "Priya", marks: 92 },
    { name: "Karthik", marks: 68 },
    { name: "Divya", marks: 85 }
];


const asc=students.sort((a,b)=>a.marks - b.marks);
const s=[...students];
const des=s.sort((a,b)=>b.marks - a.marks);
console.log("Marks(ascending):", asc);
console.log("Marks(descending):",des);
