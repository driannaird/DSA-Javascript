const setInstance = new Set([1, 2, 3]);

/**
 * Set - Big-O time complexity
 * - Add / Delete - O(1)
 * - Has - O(1)
 * - Size - O(1)
 * - For - O(n)
 * - Clear - O(n)
 **/

setInstance.add(4); // Add - O(1)
// Output: Set(4) { 1, 2, 3, 4 }

setInstance.delete(2); // Delete - O(1)
// Output: Set(3) { 1, 3, 4 }

console.log(setInstance.has(4)); // Has - O(1)
// Output: true

console.log(setInstance.size); // Size - O(1)
// Output: 3

for (const item of setInstance) {
  console.log(item);
} // for - O(n)
// Output: 1, 3, 4

// Mengonversi set menjadi array untuk akses elemen dengan indeks
const arrayFromSet = Array.from(setInstance); // O(n)
console.log(arrayFromSet[0]); // O(1)
// Output: 1
console.log(arrayFromSet[1]); // O(1)
// Output: 3

setInstance.clear(); // Clear - O(n)
// Set(0) {}

console.log("?");
