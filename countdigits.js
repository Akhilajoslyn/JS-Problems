function countDigits(num) {
    // Handle negative numbers by converting to positive
    if (num < 0) {
        num = -num;
    }

    // Initialize digit count to 0
    let digitCount = 0;

    // Handle the case where num is 0
    if (num === 0) {
        return 1;
    }

    // Count digits by dividing the number by 10 until it becomes 0
    while (num > 0) {
        num = Math.floor(num / 10);
        digitCount++;
    }

    return digitCount;
}

// Example usage:
let number = 12345;
let result = countDigits(number);

console.log(`Number of digits in ${number}:`, result); // Output: Number of digits in 12345: 5
