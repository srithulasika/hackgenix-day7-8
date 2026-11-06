//Check whether a year is a leap year (divisible by 4, but not by 100 unless also by 400).

const year=2037;
if((year%4==0 && year %100!=0) || (year%400==0)){
    console.log(`${year} is a leap year`);
}
else{
    console.log(`${year} is not a leap year`);
}