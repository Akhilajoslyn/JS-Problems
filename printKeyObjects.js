function printObjectKeys(obj) {
    // Loop through each property in the object
    for (let key in obj) {
        // Check if the property is a direct property of the object (not inherited)
        if (obj.hasOwnProperty(key)) {
            // Print the key
            console.log(key);
        }
    }
}

// Example usage:
let exampleObject = {
    name: "Akhila",
    age: 23,
    profession: "Engineer",
    city: "Bengaluru"
};

printObjectKeys(exampleObject);
