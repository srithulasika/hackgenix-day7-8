//Print FizzBuzz from 1 to 50 and count how many Fizz, Buzz and FizzBuzz there were.

let fizzbuzz=0;
let fizz=0;
let buzz=0;
for(let num=1;num<=50;num++){
    if(num % 15 === 0){
        console.log("fizzbuzz");
        fizzbuzz++;
    }
    else if(num%3===0){
        console.log("fizz");
        fizz++;
    }
    else if(num%5===0){
        console.log("buzz");
        buzz++;
    }
    else{
        console.log(num);
    }
}

console.log(`FizzBuzz count: ${fizzbuzz}`);
console.log(`Fizz count: ${fizz}`);
console.log(`Buzz count: ${buzz}`);