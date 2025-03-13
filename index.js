// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

// Example Usage:
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
const driverObjects = [
    { name: "Bobby", hometown: "New York" },
    { name: "Sammy", hometown: "Florida" },
    { name: "Sally", hometown: "California" },
    { name: "Bobby", hometown: "Texas" }
];

console.log(findMatching(drivers, "Bobby")); // ["Bobby", "Bobby"]
console.log(fuzzyMatch(drivers, "Sa")); // ["Sammy", "Sally", "Sarah"]
console.log(matchName(driverObjects, "Bobby")); 
// Output: [{ name: "Bobby", hometown: "New York" }, { name: "Bobby", hometown: "Texas" }]

