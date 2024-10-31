const setInstance = new Set([1, 2, 3]);

/**
 * Set - Big-O time complexity
 * - Add / Delete - O(1)
 * - Has - O(1)
 * - Size - O(1)
 * - For - O(n)
 * - Clear - O(n)
 **/

console.log(setInstance);

// Add - O(1)
setInstance.add(4);
// Output: Set(4) { 1, 2, 3, 4 }

// Delete - O(1)
setInstance.delete(2);
// Output: Set(3) { 1, 3, 4 }

// Has - O(1)
console.log(setInstance.has(4));
// Output: true

// Size - O(1)
console.log(setInstance.size);
// Output: 3

// for - O(n)
for (const item of setInstance) {
  console.log(item);
}
// Output: 1, 3, 4

// Mengonversi set menjadi array untuk akses elemen dengan indeks

// O(n)
const arrayFromSet = Array.from(setInstance);
// O(1)
console.log(arrayFromSet[0]);
// Output: 1

// O(1)
console.log(arrayFromSet[1]);
// Output: 3

// Clear - O(n)
setInstance.clear();
// Set(0) {}

console.log("?");
