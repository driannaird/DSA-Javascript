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

console.log(arr);

// Insert from end - O(1)
arr.push(4);
// Output: [1, 2, 3, "Vishmas", 4]

// Remove from end - O(1)
arr.pop();
// Output: [1, 2, 3, "Vishmas"]

// Insert from beginning - O(n)
arr.unshift(0);
// Output: [0, 1, 2, 3, "Vishmas"]

// Remove from begining - O(n)
arr.shift();
// Output: [1, 2, 3, "Vishmas"]

// Access - O(1)
const arrAccess = arr[2];
// Output: 3

// Search - O(n)
const arrFind = arr.find((item) => item === "Vishmas");
// Output: "Vishmas"

// Concat - O(n)
const arrConcat = arr.concat([6, 3]);
// Output: [1, 2, 3, "Vishmas", 6, 3]

// Slice - O(n)
const arrSlice = arr.slice(1, 3);
// Output: [2, 3]

// Splice - O(n)
arr.splice(2, 1, "Banana", "Lemon");
// Output: [1, 2, "Banana", "Lemon", "Vishmas"]

// For Of - O(n)
for (const item of arr) {
  console.log(item);
}
// Output:
// 1
// 2
// Banana
// Lemon
// Vishmas

// Map - O(n)
arr.map((item) => console.log(item));
// Output:
// 1
// 2
// Banana
// Lemon
// Vishmas

// Filter - O(n)
const arrFilter = arr.filter((item) => typeof item === "number");
// Output: [1, 2]

// Reduce - O(n)
const arrReduceSum = arrFilter.reduce(
  (accumulator, currentArr) => accumulator + currentArr,
  0
);
// Output: 3

console.log("?");
