/*
switch (grade) {
case "A": console.log("Excellent");
case "B": console.log("Good"); break;
defualt: console.log("Try again");
}
*/

// Corrected code:

let grade = "A"
switch(grade){
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    default:
        console.log("Try again");
}
