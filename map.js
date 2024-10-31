const map = new Map([
  ["name", "Erlangga"],
  ["age", 25],
  ["city", "Jakarta"],
]);

/**
 * Map - Big-O time complexity
 * - Insert / Delete - O(1)
 * - Get - O(1)
 * - Has - O(1)
 * - Size - O(1)
 * - forEach / iteration - O(n)
 * - Clear - O(n)
 **/

console.log(map);

// Insert (or Update) an entry - O(1)
map.set("country", "Indonesia");
// Output: Map(4) { 'name' => 'Erlangga', 'age' => 25, 'city' => 'Jakarta', 'country' => 'Indonesia' }

// Get a value by key - O(1)
console.log(map.get("name"));
// Output: "Erlangga"

// Check if a key exists - O(1)
console.log(map.has("age"));
// Output: true

// Get the size of the map - O(1)
console.log(map.size);
// Output: 4

// Delete an entry by key - O(1)
map.delete("city");
// Output: Map(3) { 'name' => 'Erlangga', 'age' => 25, 'country' => 'Indonesia' }

// Iterate over all entries - O(n)
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: Erlangga
// age: 25
// country: Indonesia

// Convert Map to Array of key-value pairs - O(n)
const arrayFromMap = Array.from(map);
console.log(arrayFromMap);
// Output: [['name', 'Erlangga'], ['age', 25], ['country', 'Indonesia']]

// Clear all entries in the map - O(n)
map.clear();
console.log(map);
// Output: Map(0) {}

console.log("?");
