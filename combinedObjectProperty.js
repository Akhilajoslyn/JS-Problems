function combineObjects(...objects) {
    // Combine all objects into a single object using Object.assign
    let combinedObject = Object.assign({}, ...objects);
    return combinedObject;
}

// Example usage:
let obj1 = {
    name: "Akhila",
    age: 25,
    profession: "Engineer"
};

let obj2 = {
    city: "Bengaluru",
    country: "India"
};

let obj3 = {
    age: 23, // This will overwrite the age property from obj1
    hobby: "Reading"
};

let combinedResult = combineObjects(obj1, obj2, obj3);

console.log("Combined Object:", combinedResult);
