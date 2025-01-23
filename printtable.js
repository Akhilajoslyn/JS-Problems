function printTable(number) {
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Example usage:
let number = 5;
printTable(number);
