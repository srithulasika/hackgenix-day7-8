//Find the largest of three numbers using if / else if.
const a=10;
const b=12;
const c=15;
if(a>b && a>c){
    console.log(`The largest number is ${a}`);   
}
else if(b>a && b>c){
    console.log(`The largest number is ${b}`);
}
else{
    console.log(`The largest number is ${c}`);
}