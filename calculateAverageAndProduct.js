function calculateAverageAndProduct(num1, num2) {
    // Calculate the average of the two numbers
    let average = (num1 + num2) / 2;

    // Calculate the product of the two numbers
    let product = num1 * num2;

    // Return the results as an object
    return {
        average: average,
        product: product
    };
}

// Example usage:
let number1 = 6;
let number2 = 4;
let result = calculateAverageAndProduct(number1, number2);

console.log("Result:", result); // Output: Result: { average: 5, product: 24 }
