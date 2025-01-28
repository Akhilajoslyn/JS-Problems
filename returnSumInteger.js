function sumIntegerValues(obj) {
    // Initialize sum variable to 0
    let sum = 0;

    // Loop through each property in the object
    for (let key in obj) {
        // Check if the property is a direct property of the object (not inherited)
        if (obj.hasOwnProperty(key)) {
            // Check if the value is a number
            if (typeof obj[key] === 'number') {
                sum += obj[key]; // Add the number to the sum
            }
        }
    }

    return sum; // Return the total sum
}

// Example usage:
let studentMarks = {
    math: 85,
    physics: 90,
    chemistry: 78,
    english: "A",
    biology: 88,
    computerScience: 95,
    history: "B"
};

let totalSum = sumIntegerValues(studentMarks);
console.log("Sum of integer values:", totalSum); // Output: Sum of integer values: 436
