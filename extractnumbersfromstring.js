function extractNumbers(str) {
    // Use a regular expression to match all numbers in the string
    let numberMatches = str.match(/\d+/g);
    
    // If there are no numbers, return an empty array
    if (!numberMatches) {
        return [];
    }
    
    // Convert the matched strings to numbers and return the array of numbers
    return numberMatches.map(Number);
}

// Example usage:
let exampleString = "There are 3 cats, 7 dogs, and 12 birds.";
let numbers = extractNumbers(exampleString);

console.log("Extracted Numbers:", numbers); // Output: [3, 7, 12]
