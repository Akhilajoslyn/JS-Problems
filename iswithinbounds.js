function isWithinBounds(n, lower, upper) {
    // Check if n is an integer
    if (!Number.isInteger(n)) {
        return false;
    }

    // Check if n is within the bounds of lower and upper
    return n >= lower && n <= upper;
}

// Example usage:
let n1 = 5;
let lower1 = 3;
let upper1 = 10;

let result1 = isWithinBounds(n1, lower1, upper1);
console.log(`Is ${n1} within bounds ${lower1} and ${upper1}:`, result1); // Output: Is 5 within bounds 3 and 10: true

let n2 = 12;
let lower2 = 3;
let upper2 = 10;

let result2 = isWithinBounds(n2, lower2, upper2);
console.log(`Is ${n2} within bounds ${lower2} and ${upper2}:`, result2); // Output: Is 12 within bounds 3 and 10: false


