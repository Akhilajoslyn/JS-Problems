function isExists(obj, prop) {
    // Check if the property exists in the object using the "in" operator
    return prop in obj;
}

// Example usage:
let exampleObject = {
    name: "Akhila",
    age: 23,
    profession: "Engineer",
    city: "Bengaluru"
};

let property1 = "profession";
let property2 = "country";

console.log(`Does the object have the property "${property1}"?`, isExists(exampleObject, property1)); // Output: Does the object have the property "profession"? true
console.log(`Does the object have the property "${property2}"?`, isExists(exampleObject, property2)); // Output: Does the object have the property "country"? false
