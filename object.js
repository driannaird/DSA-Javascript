const obj = {
  name: "Erlangga",
  age: 25,
  "key-tree": true,
  sayMyName: function () {
    console.log(this.name);
  },
};
obj.hobby = "football";

delete obj.hobby;

console.log(obj.name);
console.log(obj["age"]);
console.log(obj["key-tree"]);
console.log(obj);
obj.sayMyName();

// Object.keys() .values() .entries()
const person = { name: "Ali", age: 25, city: "Jakarta" };
const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);

console.log(Object.values(person).find((value) => value === "Ali"));

console.log(keys); // Output: ["name", "age", "city"]
console.log(values); // Output: ["Ali", 25, "Jakarta"]
console.log(entries); // Output: [["name", "Ali"], ["age", 25], ["city", "Jakarta"]]

/**
 * Object - Big-O time complexity
 * - Insert / Remove - O(1)
 * - Access - O(1)
 * - Search - O(n)
 * - Object.keys() - O(n)
 * - Object.values() - O(n)
 * - Object.entries() - O(n)
 **/
