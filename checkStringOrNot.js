function getMiddleCharInUpperCase(input) {
    // Check if the input is a string
    if (typeof input !== 'string') {
        return "Input is not a string"; // Return a message if it's not a string
    }

    // Calculate the middle index of the string
    let middleIndex = Math.floor(input.length / 2);

    // Get the character at the middle index
    let middleChar = input[middleIndex];

    // Convert the middle character to uppercase
    let upperCaseMiddleChar = middleChar.toUpperCase();

    // Return the uppercase middle character
    return upperCaseMiddleChar;
}

// Example usage:
let example1 = "hello";
let example2 = 12345;

console.log(getMiddleCharInUpperCase(example1)); // Output: L
console.log(getMiddleCharInUpperCase(example2)); // Output: Input is not a string
