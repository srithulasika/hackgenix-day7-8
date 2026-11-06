//Write max(arr) first with a loop, then again with reduce. Do not use Math.max.


//using loop
const numbers = [12, 45, 7, 89, 34, 56];
let max=numbers[0];
for(const number of numbers){
    if(max<number){
        max=number;
    }
}
console.log(`Maximum Number using for: ${max}`);

//using reduce 

const result=numbers.reduce((max,n)=>{
     if(max<n){
        max=n;
     }
       return max;
},numbers[0]);

console.log(`Maximum number using reduce(): ${result}`);

