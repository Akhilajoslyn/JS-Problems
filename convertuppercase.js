function toUpperCase(str) {
    // Create a lookup table for lowercase to uppercase conversion
    const lowerToUpper = {
        'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 'e': 'E',
        'f': 'F', 'g': 'G', 'h': 'H', 'i': 'I', 'j': 'J',
        'k': 'K', 'l': 'L', 'm': 'M', 'n': 'N', 'o': 'O',
        'p': 'P', 'q': 'Q', 'r': 'R', 's': 'S', 't': 'T',
        'u': 'U', 'v': 'V', 'w': 'W', 'x': 'X', 'y': 'Y',
        'z': 'Z'
    };

    // Initialize an empty string to store the result
    let upperCaseStr = "";

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // Check if the character is in the lookup table (i.e., it's a lowercase letter)
        if (lowerToUpper[char]) {
            // Convert to uppercase using the lookup table
            upperCaseStr += lowerToUpper[char];
        } else {
            // If it's not a lowercase letter, add it as is
            upperCaseStr += char;
        }
    }

    // Return the uppercase string
    return upperCaseStr;
}

// Example
let originalString = "Akhila";
let upperCaseString = toUpperCase(originalString);

console.log("Original String:", originalString); 
console.log("Uppercase String:", upperCaseString); 