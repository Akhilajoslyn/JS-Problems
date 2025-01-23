function convertToNumber(input) {
    // Attempt to convert the input to a number
    let convertedNumber = Number(input);

    // Check if the conversion was successful
    if (isNaN(convertedNumber)) {
        return "Not a number"; // Return message if conversion failed
    }

    // Return the converted number if successful
    return convertedNumber;
}

// Example usage:
let input1 = "42";
let input2 = "hello";

console.log(convertToNumber(input1)); // Output: 42
console.log(convertToNumber(input2)); // Output: Not a number
