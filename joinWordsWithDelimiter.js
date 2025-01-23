function joinWordsWithDelimiter(str, delimiter) {
    // Split the string into an array of words using space as the delimiter
    let wordsArray = str.split(' ');

    // Join the words with the given delimiter
    let joinedString = wordsArray.join(delimiter);

    // Return the joined string
    return joinedString;
}

// Example usage:
let exampleString = "hello world this is a test";
let delimiter = "-";
let result = joinWordsWithDelimiter(exampleString, delimiter);

console.log("Joined String:", result); // Output: hello-world-this-is-a-test
