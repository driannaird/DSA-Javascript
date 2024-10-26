const obj = {
  name: "Erlangga",
  age: 25,
  "key-tree": true,
  sayMyName: function () {
    console.log(this.name);
  },
};

/**
 * Object - Big-O time complexity
 * - Insert / Remove - O(1)
 * - Access - O(1)
 * - Search - O(n)
 * - Object.keys() - O(n)
 * - Object.values() - O(n)
 * - Object.entries() - O(n)
 **/

obj.hobby = "football"; // Insert - O(1)
// Output:
// {
//   name: 'Erlangga',
//   age: 25,
//   'key-tree': true,
//   sayMyName: [Function: sayMyName],
//   hobby: 'football'
// }

obj.sayMyName(); // Access - O(1)
// Output: "Erlangga"
console.log(obj.name); // Access - O(1)
// Output: "Erlangga"
console.log(obj["key-tree"]); // Access - O(1)
// Output: true

const searchObj = obj.hasOwnProperty("age"); // Search - O(n)
// Output: true

// Object.keys() .values() .entries() - O(n)
const person = { name: "Ali", age: 25, city: "Jakarta" };

console.log(Object.values(person).find((value) => value === "Ali")); // Search - O(n)
// Output: "Ali"
const keys = Object.keys(person); // Object.keys() - O(n)
// Output: ["name", "age", "city"]
const values = Object.values(person); // Object.values() - O(n)
// Output: ["Ali", 25, "Jakarta"]
const entries = Object.entries(person); // Object.entries() - O(n)
// Output: [["name", "Ali"], ["age", 25], ["city", "Jakarta"]]

console.log("?");
