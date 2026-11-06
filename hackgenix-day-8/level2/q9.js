//Create an array of 5 student objects and print the names, the topper, the class average and the failed students.

const students = [
    { name: "Arun", marks: 75 },
    { name: "Priya", marks: 92 },
    { name: "Karthik", marks: 35 },
    { name: "Divya", marks: 85 },
    { name: "Sathya", marks: 28 }
];

//  Print all student names
console.log("Student Names:");
for (const student of students) {
    console.log(student.name);
}

//  Find the topper
let topper = students[0];
for (const student of students) {
    if (student.marks > topper.marks) {
        topper = student;
    }
}
console.log("Topper:", topper.name);
console.log("Highest Marks:", topper.marks);

// Calculate class average
const total = students.reduce((sum, student) => {
    return sum + student.marks;
}, 0);
const average = total / students.length;
console.log("Class Average:", average);

//  Find failed students
const failedStudents = students.filter((student) => {
    return student.marks < 40;
});
console.log("Failed Students:");
for (const student of failedStudents) {
    console.log(student.name, student.marks);
}