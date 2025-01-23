// Define a function that takes another function as an argument
function executeFunction(func) {
    // Call the passed function and return its result
    return func();
}

// Example function to pass as an argument
function add() {
    let a = 5;
    let b = 3;
    return a + b;
}

// Example usage:
let result = executeFunction(add);

console.log("Result of the passed function:", result); 
