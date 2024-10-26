const arr = [1, 2, 3, "Vishmas"];

/**
 * Array - Big-O time complexity
 * - Insert (push) / remove (pop) from end - O(1)
 * - Insert (unshift) / remove (shift) from beginning - O(n)
 * - Access - O(1)
 * - Search (find) - O(n)
 * - concat / slice / splice - O(n)
 * - for / map / filter / reduce - O(n)
 **/

arr.push(4); // Insert from end - O(1)
// Output: [1, 2, 3, "Vishmas", 4]

arr.pop(); // Remove from end - O(1)
// Output: [1, 2, 3, "Vishmas"]

arr.unshift(0); // Insert from beginning - O(n)
// Output: [0, 1, 2, 3, "Vishmas"]

arr.shift(); // Remove from begining - O(n)
// Output: [1, 2, 3, "Vishmas"]

const arrAccess = arr[2]; // Access - O(1)
// Output: 3

const arrFind = arr.find((item) => item === "Vishmas"); // Search - O(n)
// Output: "Vishmas"

const arrConcat = arr.concat([6, 3]); // Concat - O(n)
// Output: [1, 2, 3, "Vishmas", 6, 3]

const arrSlice = arr.slice(1, 3); // Slice - O(n)
// Output: [2, 3]

arr.splice(2, 1, "Banana", "Lemon"); // Splice - O(n)
// Output: [1, 2, "Banana", "Lemon", "Vishmas"]

for (const item of arr) {
  console.log(item);
} // For Of - O(n)
// Output:
// 1
// 2
// Banana
// Lemon
// Vishmas

arr.map((item) => console.log(item)); // Map - O(n)
// Output:
// 1
// 2
// Banana
// Lemon
// Vishmas

const arrFilter = arr.filter((item) => typeof item === "number"); // Filter - O(n)
// Output: [1, 2]

const arrReduceSum = arrFilter.reduce(
  (accumulator, currentArr) => accumulator + currentArr,
  0
); // Reduce - O(n)
// Output: 3

console.log("?");
