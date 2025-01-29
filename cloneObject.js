function cloneObject(obj) {
    // Create a shallow copy of the object using the spread operator
    let clone = { ...obj };

    // Return the cloned object
    return clone;
}

// Example usage:
let originalObject = {
    name: "Akhila",
    age: 25,
    profession: "Engineer",
    city: "Bengaluru"
};

let clonedObject = cloneObject(originalObject);

console.log("Original Object:", originalObject);
console.log("Cloned Object:", clonedObject);
