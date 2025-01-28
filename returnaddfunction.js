function createAdder(n) {
    // Return a new function that takes a number and adds n to it
    return function(x) {
        return x + n;
    };
}

// Example usage:
let addFive = createAdder(5);
let result = addFive(10);

console.log(`Result of adding 5 to 10:`, result); // Output: Result of adding 5 to 10: 15
