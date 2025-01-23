function sumRange(start, end) {
    // Initialize the sum variable to 0
    let sum = 0;

    // Loop from start to end (inclusive) and add each number to the sum
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    // Return the total sum
    return sum;
}

// Example usage:
let start = 5;
let end = 10;
let totalSum = sumRange(start, end);

console.log(`Sum of numbers between ${start} and ${end}:`, totalSum); // Output: Sum of numbers between 5 and 10: 45
