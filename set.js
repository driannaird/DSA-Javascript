const setInstance = new Set([1, 2, 3]);

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
const arrayFromSet = Array.from(setInstance);
console.log(arrayFromSet[0]); // Output: 1
console.log(arrayFromSet[1]); // Output: 3

setInstance.clear(); // Clear - O(n)
// Set(0) {}
