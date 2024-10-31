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

console.log(obj);

// Insert - O(1)
obj.hobby = "football";
// Output:
// {
//   name: 'Erlangga',
//   age: 25,
//   'key-tree': true,
//   sayMyName: [Function: sayMyName],
//   hobby: 'football'
// }

// Access - O(1)
obj.sayMyName();
// Output: "Erlangga"
console.log(obj.name);
// Output: "Erlangga"
console.log(obj["key-tree"]);
// Output: true

// Search - O(n)
const searchObj = obj.hasOwnProperty("age");
// Output: true

// Object.keys() .values() .entries() - O(n)
const person = { name: "Ali", age: 25, city: "Jakarta" };

// Search - O(n)
console.log(Object.values(person).find((value) => value === "Ali"));
// Output: "Ali"

// Object.keys() - O(n)
const keys = Object.keys(person);
// Output: ["name", "age", "city"]

// Object.values() - O(n)
const values = Object.values(person);
// Output: ["Ali", 25, "Jakarta"]

// Object.entries() - O(n)
const entries = Object.entries(person);
// Output: [["name", "Ali"], ["age", 25], ["city", "Jakarta"]]

console.log("?");
