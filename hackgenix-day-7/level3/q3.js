//Print all Armstrong numbers between 1 and 1000 (153 = 1 cubed + 5 cubed + 3 cubed).

for(let i=1 ; i<=1000;i++){
    let digits=i.toString().length;
    let original=i;
    let sum=0;
    let temp=i;
    while(temp > 0){
      let lastDigit = temp % 10;
      sum=sum+Math.pow(lastDigit,digits);
      temp=Math.floor(temp/10);
    }
    if(sum==original){
        console.log(original);
    }
}