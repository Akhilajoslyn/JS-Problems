function printPrimeNumbers(length) {
    // Helper function to check if a number is prime
    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    let primes = [];
    let num = 2; // Start checking for primes from 2

    // Continue finding primes until we have the desired length
    while (primes.length < length) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    // Print the prime numbers
    console.log(`First ${length} prime numbers:`, primes);
}

// Example usage:
let length = 10;
printPrimeNumbers(length);
