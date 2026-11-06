//palindrome 

let num=1331;
let palindrome=num;
let rem;
let reverse=0;
while(num > 0){
    rem=num%10;
    reverse=(reverse*10)+rem;
    num=Math.floor(num/10);
}

if(palindrome==reverse){
    console.log(`${palindrome} is  a palindrome`);
}
else{
     console.log(`${palindrome} is  not a palindrome`);
}