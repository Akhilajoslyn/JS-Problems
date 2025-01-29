function getUniqueChars(str) {
    // Initialize an empty object to track unique characters
    let charTracker = {};

    // Initialize an empty string to store unique characters
    let uniqueStr = "";

    // Loop through each character in the string
    for (let char of str) {
        // If the character is not already tracked, add it to the unique string and track it
        if (!charTracker[char]) {
            uniqueStr += char;
            charTracker[char] = true;
        }
    }

    // Return the string with unique characters
    return uniqueStr;
}

// Example usage:
let exampleString = "hello world";
let uniqueCharsString = getUniqueChars(exampleString);

console.log("String with Unique Characters:", uniqueCharsString); // Output: helowrd

