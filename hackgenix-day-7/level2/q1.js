//Build a grade calculator: marks to grade with if / else if, and a remark for each grade with switch.

const mark = 76;
let remark;
let grade;
if(mark >= 85 && mark <=100){
   grade="A";
}
else if(mark >= 75){
    grade="B";
}
else if(mark >= 65){
    grade="C";
}
else if (mark >= 45){
    grade="D";
}
else if (mark < 45 && mark >= 0){
    grade="F"
}
else{
    grade="Invalid data";
}

switch(grade){
    case "A":
        remark="Excellent"
        console.log(`Mark:${mark} Grade: ${grade} Remark:${remark}`);
        break;
         case "B":
        remark="Very Good"
        console.log(`Mark:${mark} Grade: ${grade} Remark:${remark}`);
        break;
         case "C":
        remark="Good effort"
        console.log(`Mark:${mark} Grade: ${grade} Remark:${remark}`);
        break;
         case "D":
        remark="Needs improvement"
        console.log(`Mark:${mark} Grade: ${grade} Remark:${remark}`);
        break;
        case "F":
        remark="Failed"
        console.log(`Mark:${mark} Grade: ${grade} Remark:${remark}`);
        break;
        default:
            console.log("Invalid marks! Enter marks between 0 and 100.");

}