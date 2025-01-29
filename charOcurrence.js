function countCharOccurrences(str) {
    // Initialize an empty object to store character counts
    let charCount = {};

    // Loop through each character in the string
    for (let char of str) {
        // If the character is already a key in the object, increment its count
        if (charCount[char]) {
            charCount[char]++;
        } else {
            // If the character is not a key in the object, add it with a count of 1
            charCount[char] = 1;
        }
    }

    // Return the object containing character counts
    return charCount;
}

// Example usage:
let exampleString = "hello world";
let charOccurrences = countCharOccurrences(exampleString);

console.log("Character Occurrences:", charOccurrences);
