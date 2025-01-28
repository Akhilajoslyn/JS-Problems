function printObjectValues(obj) {
    // Loop through each property in the object
    for (let key in obj) {
        // Check if the property is a direct property of the object (not inherited)
        if (obj.hasOwnProperty(key)) {
            // Print the value of the property
            console.log(obj[key]);
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

printObjectValues(exampleObject);
