function hasProperty(obj, property) {
    // Check if the property exists in the object
    return obj.hasOwnProperty(property);
}

// Example usage:
let exampleObject = {
    name: "Akhila",
    age: 25,
    profession: "Engineer",
    city: "Bengaluru"
};

let property1 = "profession";
let property2 = "country";

console.log(`Does the object have the property "${property1}"?`, hasProperty(exampleObject, property1)); // Output: Does the object have the property "profession"? true
console.log(`Does the object have the property "${property2}"?`, hasProperty(exampleObject, property2)); // Output: Does the object have the property "country"? false
