//Use reduce to find the total, the highest value and the count of numbers above 50.

const numbers = [25, 60, 45, 90, 30, 75, 10];
const result=numbers.reduce((acc,number)=>{
    acc.total+=number;
    if(acc.highest<number){
        acc.highest=number;
    }
    if(number>50){
        acc.count++;
    }

    return acc;
},
{
    total:0,
    highest:numbers[0],
    count:0
});

console.log(`Total: ${result.total}`);
console.log(`Highest: ${result.highest}`);
console.log(`Count above 50: ${result.count}`);