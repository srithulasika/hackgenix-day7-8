//Print a number triangle: 1, then 12, then 123, up to 12345.

const num=5;
for(let i=1;i<=num;i++){
     let str = '';
    for(let j=1; j<=i; j++){
         str += j + ' ';
    }
    console.log(str);
}