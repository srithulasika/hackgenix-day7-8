//Write a memoize function using a closure and an object cache. Test it with a slow Fibonacci function.


function memoize(fn) {
    const cache = {};

    function inner(num) {

        // If result exists, reuse it
        if (cache[num] !== undefined) {
            console.log(`Fetching ${num} from cache`);
            return cache[num];
        }

        // Otherwise, calculate and store it
        console.log(`Calculating Fibonacci for ${num}`);

        const result = fn(num);
        cache[num] = result;

        return result;
    }

    return inner;
}

// Normal recursive Fibonacci function
function fibonacci(n) {

    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Create a memoized Fibonacci function
const fastFibonacci = memoize(fibonacci);

// Test
console.log("First call:");
console.log(fastFibonacci(10));

console.log("\nSecond call:");
console.log(fastFibonacci(10));

console.log("\nThird call:");
console.log(fastFibonacci(10));