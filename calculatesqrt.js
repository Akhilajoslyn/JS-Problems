function calculateSquareRoot(number) {
    if (number < 0) {
        return NaN; // Square root of negative numbers is not defined in real numbers
    }

    return Math.sqrt(number);
}

// Example 
let number = 36;
let result = calculateSquareRoot(number);

console.log(`Square root of ${number}:`, result); 