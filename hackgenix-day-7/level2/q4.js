//Count the digits of a number using a while loop.


let num = Math.abs(-234);
let count = 0;
if (num === 0) {
    count = 1;
} else {
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
}
console.log(`Count: ${count}`);