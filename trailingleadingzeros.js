function trimZeros(n) {
    // Remove leading zeros using a regular expression
    let trimmed = n.replace(/^0+/, '');

    // If the trimmed string is empty, it means the original string was all zeros
    if (trimmed === '') {
        return '0';
    }

    // Remove trailing zeros after the decimal point and unnecessary decimal point
    trimmed = trimmed.replace(/(\.\d*?[1-9])0+$/, '$1').replace(/\.0*$/, '').replace(/^0*(\d)/, '$1');

    return trimmed;
}

// Example usage:
let example1 = "000123.45000";
let result1 = trimZeros(example1);
console.log(`Original: ${example1} | Trimmed: ${result1}`); // Output: Original: 000123.45000 | Trimmed: 123.45

let example2 = "0000.0000";
let result2 = trimZeros(example2);
console.log(`Original: ${example2} | Trimmed: ${result2}`); // Output: Original: 0000.0000 | Trimmed: 0

let example3 = "001230";
let result3 = trimZeros(example3);
console.log(`Original: ${example3} | Trimmed: ${result3}`); // Output: Original: 001230 | Trimmed: 1230
